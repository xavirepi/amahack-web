import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { editProduct, getProduct } from '../../services/ProductService';
import FormElement from './FormElement';

const ProductForm = () => {
    const {id} = useParams(); // This react-router hook is used to get the id from the url params
    const {push} = useHistory(); // Hook used to redirect to other routes.
    const [product, setProduct] = useState(); // To render the form with the info of the product we got from the DB
    const [errors, setErrors] = useState(); // Validation will be made on the server side

    useEffect(() => {
        getProduct(id).then(prod => setProduct(prod))
    }, [id]) // Every time the id of the product changes we want to bring the new one calling the API

    const onChange = (e) => {
        setProduct(old => ({...old, [e.target.name]: e.target.value})) // Some values are overridden
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editProduct(product, id) // We must add a request to the server of the edited product 
            .then(() => {
                push('/');
            })
            .catch((e) => { // We create a new state errors to handle errors
                if (e.reponse.status === 400) {
                    setErrors(e.response.data.errors)
                }
            }) 
    }

    if (!product) return 'Loading...'

    return (
        <>
        <h2 className="mt-4">Edit Product</h2>
        <form onSubmit={onSubmit} className="ProductForm container mt-4">
            <FormElement
                name="Name"
                id="name"
                value={product.name}
                onChange={onChange}
                //error={errors.name}
            />
            <FormElement
                name="Description"
                id="description"
                value={product.description}
                onChange={onChange}
                tag="textarea"
                //error={errors.description}
            />
            <FormElement
                name="Price"
                id="price"
                value={product.price}
                onChange={onChange}
                type="number"
                //error={errors.price}
            />
            <FormElement
                name="Image"
                id="image"
                value={product.image}
                onChange={onChange}
                //error={errors.image}
            />
            <button type="submit" className="btn btn-primary mt-2">Save changes</button>
        </form>
        </>
    );
};

export default ProductForm;