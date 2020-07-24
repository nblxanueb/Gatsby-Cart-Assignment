import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";



const Cart = () => {
  return (
    <>
      <SEO title="shopping cart" />
      <h1 style={{ display: "flex", justifyContent: "center", fontSize: "2em", margin: "1em"}}>Your Shopping Cart</h1>
      <div style={{ margin: "2em", border: "2px solid lightgrey", borderRadius: '1em', padding: "1em" }}>
          <h3>Cart Total:</h3>
          <Link to="/checkout" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            <button style={{ border: "none", fontSize: "2em", height: "2em", background: "orange", color: "white"}}>Proceed to Checkout</button>
          </Link>
      </div>
    </>
  )
};



export default Cart;
