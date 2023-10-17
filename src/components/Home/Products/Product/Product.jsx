import React from "react";
import prod from "../../../../assets/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png";
import "./Product.scss";

function Product() {
  return <div className="product-card ">
    <div className="thumbnail">
      <img className="img" src={prod} alt="product"/> 
    </div>
      <div className="prod-details">
     <span className="name">Product name </span>
     <span className="price">&#8377;499</span>
    </div>
  </div>
}
export default Product;