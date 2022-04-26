import axios from "axios";

const ApiRick = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    //  headers: {
    //     'Content-type': 'application/json;charset=utf-8',
    // //     'content-type': 'application/json;charset=utf-8',
     
})

export default ApiRick;