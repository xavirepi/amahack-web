import { create } from './BaseService';

const http = create(); // We need the token here so it must not be set to false

export const getProducts = () => {
    return http.get('/products')
}

export const getProduct = (id) => {
    return http.get(`/products/${id}`)
}
