import React from "react";
import Product from "./Product/Product";
import "./Products.scss";



function Products({innerhtml , headingText }) {
return <div className="products-container">
      { !innerhtml && <div className="sec-heading"> 
      {headingText}
      </div>}
        <div className="products">
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
        <Product className="prodcutList"/>
      </div>
    </div> 
}
export default Products ;
