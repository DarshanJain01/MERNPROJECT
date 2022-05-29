import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import {RiSearchLine} from "react-icons/ri"

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="container productCard">

    {/* <Link className="productCard" to={`/product/${product._id}`}> */}
      <img src={product.images[0].url} className='imge' alt={product.name} />
      <div className="blck">
      <Link className="search-icon" to={`/product/${product._id}`}>
                      <RiSearchLine />
                    </Link>       </div>
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    {/* </Link> */}
            </div>

  );
};

export default ProductCard;
