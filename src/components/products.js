import React from "react";



const Products = ({ products, addToCart }) => {
  const allProducts = products.map((item, index) => {
    return (
      <div style={{ padding: "1em", margin: "1em", border: "2px solid lightgrey", borderRadius: '1em', maxWidth: "20em" }} key={index} >
        <form onSubmit={addToCart}>
          <img style={{ maxWidth: "300px" }} src={item.img} alt={item.name} />
          <div style= {{ fontWeight: "bold"}}>{item.name}</div>
          <div>By {item.author}</div>
          <br/>
          <div style={{ fontSize: "2em", display: "flex", justifyContent: "space-between"}}>
            <div>${item.price}</div>
            <button style={{ border: "none", background: "none"}}>🛒 Add</button>
          </div>
        </form>
      </div>
    )
  })

  return (
    <div
      style={{ margin: "2em", display: "flex", flexWrap: "wrap",justifyContent: "center" }} >
      {allProducts}
    </div>
  )
};



export default Products;
