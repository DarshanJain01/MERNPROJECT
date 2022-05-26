import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct,getProductCategories } from "../../actions/productAction";
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

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const {categories}=useSelector((state)=>state.categories)
  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  
  let count = filteredProductsCount;

  useEffect(() => {
    console.log('kee',newKeyWord)
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductCategories())
    dispatch(getProduct(newKeyWord, currentPage, price, category, ratings));
  }, [dispatch,keyword,currentPage, price, category, ratings, alert, error]);
  
  
 const newKeyWordHandler=(value)=>{
  dispatch(getProduct(value , currentPage, price, category, ratings));
  setNewKeyWord(value)
}

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
        <div className="product-content">
          <FilterComponent { ...{newKeyWordHandler,newKeyWord,price,priceHandler,categories,category,setCategory,ratings,setRatings} }/>
          <ProductsList products={products}/>
        </div>
          {resultPerPage < count && (
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
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
