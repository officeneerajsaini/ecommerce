import React from "react";
import "./Footer.scss";
import { FaLocationPin } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { BiLogoGmail } from "react-icons/bi"
// import Payment from "./payment.png";

function Footer() {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title" >About</div>
                <div className="text1">jhfuf sdjfhusjf fhs sjhfd fsdfsf f sfsd fsf jhfuf sdjfhusjf fhs sjhfd fsdfsf f sfsd fsf jhfuf sdjfhusjf fhs sjhfd fsdfsf f sfsd fsf </div>
            </div>
            <div className="col">
                <div className="title" >Contact</div>
                <div className="c-item">
                    <FaLocationPin />
                    <div className="text1">
                        362, Mallie Court 9318 Beier Square , North Carolina , North Jillian 43289
                    </div>
                </div>
                <div className="c-item">
                    <IoCall />
                    <div className="text1">
                        Phone: 0485 354 5466
                    </div>
                </div>
                <div className="c-item">
                    <BiLogoGmail />
                    <div className="text1">
                        Email: store@rxdev.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title" >Categories</div>
                <span className="text1">Headphones</span>
                <span className="text1">Smart Watches</span>
                <span className="text1">Bluetooth Speakers</span>
                <span className="text1">Wireless Earbuds</span>
                <span className="text1">Home Theatre</span>
                <span className="text1">Projectors</span>
            </div>
            <div className="col">
                <div className="title" >Pages</div>
                <span className="text1">Home</span>
                <span className="text1">About</span>
                <span className="text1">Privacy Policy</span>
                <span className="text1">Returns</span>
                <span className="text1">Terms & Conditions</span>
                <span className="text1">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <p className="txt">
                    NSDEVSTORE 2022 CREATED BY Neeraj Saini.
                </p>
            </div>
        </div>
    </footer>
}
export default Footer;