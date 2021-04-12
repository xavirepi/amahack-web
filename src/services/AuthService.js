import { create } from './BaseService';

const http = create({ // An instance of BaseService create() method
    // We create our own opts that will be passed to BaseService
    useAccessToken: false // Set to false by default to avoid any header to be sent when the instance is created
}); 

http.interceptors.request.use(request => { // We create and interceptor in the request to get the request object sent to the backend (Note: interceptors can be used on both the request and the response)
    // send token as authorization
    
}) 

export const login = (body) => { // We create a route to make login
    return http.post('/login', body) // We send the request to the backend passing what we get from body
}