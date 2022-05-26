import React from "react";
import ProductCard from "../Home/ProductCard";

const ProductsList=({products})=>{
    return( <div className="products">
    {products &&
      products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
  </div>)
}
export default ProductsList