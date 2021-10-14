import axios from "axios";

//https://sujeitoprogramador.com/r-api/?api=filmes/

//Base URL = https://sujeitoprogramador.com
//Todos os filmes = r-api/?api=filmes/
// r-api/?api=filmes/123 => Filme Id = 123

const api = axios.create(
    {
        baseURL: 'https://sujeitoprogramador.com'
    }
);

export default api;