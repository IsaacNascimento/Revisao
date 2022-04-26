import axios from "axios";

const ApiDeputados = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
    //  headers: {
    //     'Content-type': 'application/json;charset=utf-8',
    // //     'content-type': 'application/json;charset=utf-8',
     
})

export default ApiDeputados;