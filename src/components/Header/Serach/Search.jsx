import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png"

function Search({setShowSearch}) {
    return <div className="search-modal">
        <div className="form-field">
            <input type="text"  autoFocus placeholder="search for products"/>
            <MdClose className="close-btn" onClick={ () =>setShowSearch(false)}/>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt=""/>
                    </div>
                    <div className="prod-details" >
                     <span className="name">Product Name</span>
                     <span className="desc">Product Desc</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Search;