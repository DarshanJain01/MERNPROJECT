import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct, getProductCategories } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import Search from "./Search";
import FilterComponent from "./filtercomponent";
import ProductsList from "./productsList";

// const categories = [
//   "Laptop",
//   "Footwear",
//   "Bottom",
//   "Tops",
//   "Attire",
//   "Camera",
//   "SmartPhones",
// ];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [newKeyWord, setNewKeyWord] = useState("");
  const [ratings, setRatings] = useState(0);
  const [indexx, setIndexx] = useState(1)
  const [currentSliderRange, setCurrentSliderRange] = useState([0,25000])

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories)
  const keyword = match.params.keyword;
  const paginationLimit= Math.ceil(filteredProductsCount/ resultPerPage)


  const newPage = (index) => {

    if (index !== indexx) {
      setCurrentPage(index)
      setIndexx(index)
    }
  }

  const nextPage = () => {
    if (indexx < paginationLimit) {
      setCurrentPage((prev) => prev + 1)
      setIndexx((prev) => prev + 1)
    } else {
      setIndexx(0)
      setCurrentPage(0)
    }
  }

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setCurrentSliderRange([...newPrice])
    setPrice(newPrice);
  };
  const clearFilter=()=>{
    console.log(price)
   setPrice([0,25000])
   setCurrentSliderRange([0,25000])
   setCategory('')
   setCurrentPage(1)
   setRatings(0)
   setNewKeyWord('')
  } 

  let count = filteredProductsCount;

  const newKeyWordHandler = (value) => {
    dispatch(getProduct(value, currentPage, price, category, ratings));
    setCategory()
    setNewKeyWord(value)
  }


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductCategories())
    dispatch(getProduct(newKeyWord, currentPage, price, category, ratings));
  }, [dispatch, keyword,currentPage, price, category, ratings, alert, error]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div style={{'minHeight':'100vh'}}>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <div className="home-navi ">
        <p>
          <a href="/" className="link">
            Home
          </a>
          /Products
        </p>
      </div>
          <h2 className="productsHeading">Products</h2>
          <div className="underline"></div>
          <div className="product-content">
            <FilterComponent {...{ newKeyWordHandler, newKeyWord, price, priceHandler, currentSliderRange,categories, category, setCategory, ratings, setRatings,clearFilter }} />
            <ProductsList products={products} />
          </div>
          {/* {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )} */}
          {resultPerPage < count && (
            <div className="next-prev-btn">
              <button
                className={indexx === 1 ? " disable" : "next-prev"}
                onClick={() => (indexx !== 0 ? nextPage() : "")}
              >
                Prev
              </button>
              {[...Array( Math.ceil(filteredProductsCount/ resultPerPage))].map((el, index) => (
                <button
                  key={index}
                  className={`numeric-btn ${indexx === index+1 && "myC"} `}
                  onClick={() => {
                    newPage(index+1)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={indexx === paginationLimit ? " disable" : "next-prev"}
                onClick={() => (indexx !==paginationLimit ? nextPage() : "")}
              >
                Next
              </button>
            </div>)}
            </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
