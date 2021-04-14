import { Link } from "react-router-dom";

const Product = ({ name, description, id, price, user, image }) => {
  return (
    <div className="Product card mt-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
          <br />
          {price / 100} €
        </p>
        <Link to={`/products/${id}`} className="btn btn-primary">
          Detail
        </Link>
      </div>
    </div>
  );
}

export default Product;
