import React from "react";
import { Link } from "gatsby";



const Navbar = ({ cartItems }) => {
  return (
    <div style={{ background: `black`, marginBottom: `1.45rem` }} >
      <div style={{ display: "flex", justifyContent: "space-between" }} >
        <Link to="/">
            <h1 style={{ margin: 0, color: "white",padding: "20px",}} >Sticker Store</h1>
        </Link>
        <Link to="/cart/" state={{ cartItems }}>
            <h1 style={{ margin: 0, color: "white",padding: "20px" }} > My Cart </h1>
        </Link>
      </div>
    </div>
  );
};



export default Navbar;
