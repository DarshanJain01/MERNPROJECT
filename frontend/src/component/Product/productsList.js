import React from "react";
import ProductCard from "../Home/ProductCard";

const ProductsList=({products})=>{

    if (products.length === 0)
    return (
      <div style={{height: "500px",margin:'auto',justifyContent:'center'}}>
        <h1>Sorry, no products matched your search.</h1>
      </div>
    )
    return( <div className="products image-display">
    {products &&
      products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
  </div>)
}
export default ProductsList