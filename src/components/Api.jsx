import axios from "axios";

const Api = axios.create({
    //api referente a consulta dos dados
    baseURL: 'http://localhost:5001'
})

export default Api;