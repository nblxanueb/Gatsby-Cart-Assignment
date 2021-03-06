import React from "react";



const Checkout = () => {
  return (
    <>
      <h3 style={{display: "flex", justifyContent: "center", fontSize: "2em", margin: "1em"}}>Shipping Information:</h3>
      <div style= {{ border: "2px solid lightgrey", borderRadius: '1em', padding: "1em", fontWeight: "bold", margin: "2em"}}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",}}>
          <label >Name:  </label><input type="text" placeholder="First name"/>  <input type="text" placeholder="Last name"/><br/><br/>
          <label>Address:  </label><input type="text" placeholder="Line 1"/>  <input type="text" placeholder="Line 2"/><br/><br/>
          <input type="text" placeholder="City"/> <input type="text" placeholder="State"/> <input type="text" placeholder="Zip"/><br/><br/>
        </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
              <div>Cart Total: $ </div><br/>
              <button style= {{ border: "none", fontSize: "2em", height: "2em", background: "orange", color: "white"}}>Checkout</button>
          </div>
      </div>
    </>
  )
};



export default Checkout;
