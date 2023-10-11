import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// API: /movie/now_playing?api_key=ac84311d9429f615da2bdbe6d9997305&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api;