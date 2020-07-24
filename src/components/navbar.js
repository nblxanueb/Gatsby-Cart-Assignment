import React from "react";
import { Link } from "gatsby";



const Navbar = ({ cartItems }) => {
  return (
    <div style={{ background: "darkblue" }} >
      <div style={{ display: "flex", justifyContent: "space-between", padding: "1.5em 3em 1.5em 3em" }} >
        <Link to="/">
            <h1 style={{ color: "white" }} >Sticker Store</h1>
        </Link>
        <Link to="/cart/" state={{ cartItems }}>
            <h1 style={{ color: "white" }} > My Cart </h1>
        </Link>
      </div>
    </div>
  );
};



export default Navbar;
