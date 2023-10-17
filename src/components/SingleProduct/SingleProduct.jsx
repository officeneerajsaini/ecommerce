import React from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons//fa";
import "./SingleProduct.scss";
import pod from "../../assets/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png"

function Singleproduct() {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                <img className="img" src={pod} alt="pod" /></div>
                <div className="right">
                    <span className="name">Product</span>
                    <span className="price">Price</span>
                    <span className="desc">Product descriptions</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span className="Span">-</span>
                            <span className="Span">2</span>
                            <span className="Span">+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20} />
                            ADD To Cart
                        </button>
                    </div>
                    <span className="divider" />
                    <div className="info-item ">
                        <span className="span-text">
                            Category:
                            <span className="">Headphones</span>
                        </span>

                        <span className="span-text ">
                            Share:
                            <span className="social-icons">
                            <FaFacebookF  className="svg" size={16} />
                            <FaTwitter  className="svg" size={16} />
                            <FaInstagram  className="svg" size={16} />
                            <FaLinkedinIn  className="svg" size={16} />
                            <FaPinterest  className="svg" size={16} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
}
export default Singleproduct;