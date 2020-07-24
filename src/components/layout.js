import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import "./layout.css";



const Layout = props => {
  return (
    <>
      <Navbar />
      <div>
        <div>{props.children}</div>
      </div>
    </>
  )
}



export default Layout;
