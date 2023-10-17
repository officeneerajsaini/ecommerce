import React from "react";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem";
import "./Cart.scss";


function Cart({ setShowCart }) {
    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => { setShowCart(false) }}>
                    <MdClose className="svg1" />
                    <span className="text">close</span>
                </span>
            </div>
            {/* <div className="empty-cart">
                <BsCartX className="svg2"/>
                <span>No Products in the cart</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div> */}
            <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="textCart">Subtotal:</span>
                        <span className="textCart total">&#8377;1234</span>
                    </div>
                    <div className="button1">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </>

        </div>
    </div>
}

export default Cart;