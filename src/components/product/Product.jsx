import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductService";
import LinkToEdit from "./LinkToEdit";

const Product = () => {
    const {id} = useParams(); // Hook used to get params from any level
    const [product, setProduct] = useState();

    useEffect(() => {
        getProduct(id)
            .then(prod => {
                console.log('response prods', prod)
                setProduct(prod)
            });
    }, [id]);

    if (!product) return 'Loading...';
        
    return (
        <div className="Product card mt-3" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.description}
                <br />
                    {product.price / 100} €
                </p>
                <LinkToEdit 
                    productId={product.id}
                    productUser={product.user}
                />
            </div>
        </div>
    );
}

export default Product;
