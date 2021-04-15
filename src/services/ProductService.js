import { create } from './BaseService';

const http = create(); // We need the token here so it must not be set to false

export const getProducts = (category) => {
    return http.get('/products', { // We add a second param. According to docs (https://masteringjs.io/tutorials/axios/get-query-params) it must be an object
        params : {category}
    })
}

export const getProduct = (id) => {
    return http.get(`/products/${id}`)
}

export const editProduct = (product, id) => {
    return http.put(`/products/${id}`, product);
}