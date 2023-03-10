import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a99dbbfe60f11919f1f1668ab3497e54',
        language: 'es-ES'
    }
})

export default movieDB;