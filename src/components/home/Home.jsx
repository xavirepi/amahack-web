import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import Products from "./Products";
import SideMenu from "./SideMenu";

const Home = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((prods) => {
      setProducts(prods);
    });
  }, []);
  return (
    <div className="Home d-flex">
      <SideMenu activeCategory={category} setCategory={setCategory} />
      <Products products={products} />
    </div>
  );
};

export default Home;
