import Slider from "@material-ui/core/Slider";
import InputRange from "react-input-range"
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";

const FilterComponent = ({newKeyWordHandler,newKeyWord,price,priceHandler,currentSliderRange,category,categories,setCategory,ratings,setRatings,clearFilter}) => {
const [slider,setSlider]=useState(25000)
    useEffect(()=>{
},[])

 return(

    <div>
    {/* <div className="myFilte">
      {" "}
      <FaTimes
        className="main-filter2 cross-icons"
        onClick={() => {
          Object.keys(filters).length !== 0 ? props.show("a") : props.show()
        }}
      />
    </div> */}

    <div className="filter-component">
      <div>
        <input
          type="text"
          onChange={(e) => { newKeyWordHandler(e.target.value) }}
          className="search-input"
          placeholder="search"
        ></input>
      </div>

      <div className="myFil">
        <h3>Category</h3>
        <div className="myFilter">
                 <ul className="categoryBox">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`filter-btns ${
                cat===category && "filter-btn"
              }`}
              onClick={() => {
                setCategory(cat)
              }}
            >
              {cat}
            </li>
          ))}
          </ul>
        </div>
      </div>

     <div className="myFiltersss">
        <h3 style={{ margin: "1rem auto",fontSize:'1.2rem'}}>
          <span>price Range:  </span>
          <div> &#8377;{currentSliderRange[0]} - &#8377;{currentSliderRange[1]}</div>
        </h3>
         <Slider
             value={price}
             onChange={priceHandler}
             valueLabelDisplay="auto"
             aria-labelledby="range-slider"
             min={200}
             max={25000}
         />
      </div>
      <div className="myFiltersss">
        <h3 style={{ margin: "1rem auto",fontSize:'1.2rem'}}>
          <span>Ratings Above:{ratings}  </span>
        </h3>
        <Slider
                 value={ratings}
                 onChange={(e, newRating) => {
                     setRatings(newRating);
               }}
                 aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                 min={0}
                max={5}
             />
      </div>
      <button
        className="clear-filter"
        onClick={() => {
          clearFilter()
        }}
      >
        clear filters
      </button>
    </div>
  </div>





//     <div className="filterBox">
//          <input 
//             type="text"
//             placeholder="Search ..."
//             onChange={(e) => { newKeyWordHandler(e.target.value) }}
//             value={newKeyWord}
//             className="search-input"
//         />
//         <Typography>Price</Typography>
//         <Slider
//             value={price}
//             onChange={priceHandler}
//             valueLabelDisplay="auto"
//             aria-labelledby="range-slider"
//             min={200}
//             max={25000}
//         />

//         <Typography>Categories</Typography>
//         <ul className="categoryBox">
//             {categories.map((category) => (
//                 <li
//                     className="category-link"
//                     key={category}
//                     onClick={() => setCategory(category)}
//                 >
//                     {category}
//                 </li>
//             ))}
//         </ul>

//             <Typography component="legend">Ratings Above</Typography>
//             <Slider
//                 value={ratings}
//                 onChange={(e, newRating) => {
//                     setRatings(newRating);
//                 }}
//                 aria-labelledby="continuous-slider"
//                 valueLabelDisplay="auto"
//                 min={0}
//                 max={5}
//             />
//     </div>
)}
export default FilterComponent