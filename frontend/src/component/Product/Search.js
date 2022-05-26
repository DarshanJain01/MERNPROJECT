import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history,setNewKeyWord,keyword }) => {
  //const [keyword, setKeyword] = useState("");

  // const searchSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (keyword.trim()) {
  //     history.push(`/products/${keyword}`);
  //   } else {
  //     history.push("/products");
  //   }
  // };
  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      {/* <form className="searchBox" onSubmit={searchSubmitHandler}> */}
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) =>{setNewKeyWord(e.target.value)}}
          value={keyword}
        />
        {/* <input type="submit" value="Search" /> */}
      {/* </form> */}
    </Fragment>
  );
};

export default Search;
