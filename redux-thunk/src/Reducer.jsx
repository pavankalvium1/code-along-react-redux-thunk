import React from "react";

const initialState={
    users:[]
}

const reducer = (state,action) => {
    switch(action.type){
        case "FETCH_DATA":
            return{
                users: action.payload,
                error: "",
            }

        case "ERROR":
            return{
                users: [],
                error: action.payload,
            }
    }
}

export default reducer