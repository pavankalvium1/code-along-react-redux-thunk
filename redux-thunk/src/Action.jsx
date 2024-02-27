import React from "react";

const FETCH_DATA = "FETCH_DATA";
const ERROR = "ERROR";

export function fetchUserData(users){
    return{
        type: FETCH_DATA,
        payload: users
    }
}

export function FetchError(error){
    return{
        type: ERROR,
        payload: error,
    }
}
