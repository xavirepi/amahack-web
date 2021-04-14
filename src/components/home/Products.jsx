import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="Products d-flex flex-wrap justify-content-around mt-3">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
