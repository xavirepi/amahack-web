import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import Products from "./Products";
import SideMenu from "./SideMenu";

const Home = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category).then((prods) => { // We pass the category to the API call
      setProducts(prods);
    });
  }, [category]); // Category is added as a dependenci so every time the category is changed there's a call to the API

  return (
    <div className="Home d-flex">
      <SideMenu activeCategory={category} setCategory={setCategory} />
      <Products products={products} />
    </div>
  );
};

export default Home;
