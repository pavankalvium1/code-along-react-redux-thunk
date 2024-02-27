import React, { useState } from "react";
import reducer from "./Reducer";
import { createStore, applyMiddleware } from 'redux';
import { fetchUserData } from "./Action";
import axios from 'axios';
import { thunk } from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));

function FetchData() {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            const users = res.data;
            dispatch(fetchUserData(users));
        })
        .catch((error) => {
            dispatch(fetchUserData(error.message));
        });
    };
}

export default function Api() {
    const [data, setData] = useState([]);

    const unsubscribe = store.subscribe(() => {
        setData(store.getState().users);
    });

    return (
        <div>
            {data.map(items => (
                <div key={items.id}>
                    <div>
                        <h3>{items.name}</h3>
                        <h4>{items.email}</h4>
                    </div>
                    <hr></hr>
                </div>
            ))}
            <button onClick={() => store.dispatch(FetchData())}>Fetch Data</button>
        </div>
    );
}
