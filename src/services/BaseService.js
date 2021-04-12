import axios from 'axios';

export const create = (opts = {}) => { // As some requests need authentication and some do not we create instances of axios requests from BaseService.js through this function
    const http = axios.create({ // Axios receives a config object
        baseURL: 'http://localhost:3001/api', // The requests are made to this URL (it'll be heroku later on)
        ...opts // We pass through all the options and we'll work with them later on
    })

    http.interceptors.response.use(response => response.data)

    return http
}