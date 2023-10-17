import React from "react";
import "./Category.scss";
import Products from "../Home/Products/Products";



function Category(){
    return <div className="category-main-content">
<div className="layout">
    <div className="category-title">
        Category Title
    </div>
    <Products innerhtml={true}/>
</div>
    </div>
};

export default Category ;