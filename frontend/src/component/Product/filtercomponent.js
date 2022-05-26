import Slider from "@material-ui/core/Slider";
import InputRange from "react-input-range"
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";

const FilterComponent = ({newKeyWordHandler,newKeyWord,price,priceHandler,categories,setCategory,ratings,setRatings}) => {
const [slider,setSlider]=useState(25000)
    useEffect(()=>{
    console.log('darshan')
},[])
return(
    <div className="filterBox">
         <input 
            type="text"
            placeholder="Search ..."
            onChange={(e) => { newKeyWordHandler(e.target.value) }}
            value={newKeyWord}
            className="search-input"
        />
        <Typography>Price</Typography>
        <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={200}
            max={25000}
        />

        <Typography>Categories</Typography>
        <ul className="categoryBox">
            {categories.map((category) => (
                <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                >
                    {category}
                </li>
            ))}
        </ul>

            <Typography component="legend">Ratings Above</Typography>
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
    </div>)
}
export default FilterComponent