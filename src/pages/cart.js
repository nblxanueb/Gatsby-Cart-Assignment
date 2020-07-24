import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";



const Cart = () => {
  return (
    <>
      <SEO title="shopping cart" />
      <h1 style={{ display: "flex", justifyContent: "center"}}>Your Shopping Cart</h1>
      <h2>Cart Total:</h2>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </>
  )
};



export default Cart;
