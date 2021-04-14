import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductService";

const Product = ({user}) => {
    const [product, setProduct] = useState();
    const {id} = useParams(); // Hook used to get params from any level

    console.log('id', id)

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
               {user.id === product.user && <Link to={`/products/${product.id}/edit`} className="btn btn-primary">
                    Detail
                </Link> }
            </div>
        </div>
    );
}

export default Product;
