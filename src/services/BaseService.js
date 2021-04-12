import axios from 'axios';
import { getAccessToken, logout } from '../store/AccessTokenStore';

export const create = (opts = {}) => { // As some requests need authentication and some do not we create instances of axios requests from BaseService.js through this function
    const http = axios.create({ // Axios receives a config object
        baseURL: 'http://localhost:3001/api', // The requests are made to this URL (it'll be heroku later on)
        ...opts // We pass through all the options and we'll work with them later on
    })

    http.interceptors.request.use(request => { // We create and interceptor in the request to get the request object sent to the backend (Note: interceptors can be used on both the request and the response)
        // send token as authorization
        if (opts.useAccessToken !== false) { // Unless told not to do so, This will always try to set the bearer header authorization
            request.headers.common.Authorization = `Bearer ${getAccessToken()}` // This is the way to set headers
        } else { // Otherwise we'll get sure is not sent by deleting it
            delete request.headers.common.Authorization
        }
    
        return request
    }) 

    http.interceptors.response.use( // Interceptors have a second parameter that we'll use to handle the expiration of the token
        response => response.data,
        (error) => {
            if (error.response && [401, 403].includes(error.response.status)) { // Sort of a middleware added to the front
                logout() // If the token expires it'll throw an error 401 (unauthoraized) or 403 (forbidden) and the user is taken out of the app
            }

            return Promise.reject(error) // This is a JS method to keep the error launching
        }
    )

    return http
}