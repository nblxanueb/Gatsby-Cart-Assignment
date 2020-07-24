import React from "react";
import SEO from "../components/seo";
import { useEffect, useState } from "react";
import Products from "../components/products";



const IndexPage = () => {
  const [products, setProducts] = useState([]);

  const addToCart = async e => {
    e.preventDefault();
    };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(res => setProducts(res))
      .catch(err => console.log(err));
  }, []);


  return (
    <>
      <SEO title="💫Twitch Stickers" />
      <Products products={products} addToCart={addToCart} />
    </>
  );
};



export default IndexPage;
