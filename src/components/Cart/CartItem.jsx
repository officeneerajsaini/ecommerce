import React from "react";
import { MdClose } from "react-icons/md"
import prod from "../../assets/main3_6370be21-3c2f-48a8-bb18-edc49a667081_600x.png";
import "./CartItem.scss";

function cartItem() {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img className="img" src={prod} alt="" />
            </div>
            <div className="product-details">
                <span className="name">Product Name
                    <MdClose className="close-btn" />
                </span>
                <div className="quantity-buttons">
                    <span className="Span">-</span>
                    <span className="Span">2</span>
                    <span className="Span">+</span>
                </div>
                <div className="text">
                    <span className="Span">2</span>
                    <span className="Span">X</span>
                    <span className="Span highlight">&#8377;6346</span>

                </div>
            </div>
        </div>
    </div>
}

export default cartItem;