import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";


function Newsletter() {
  return <div className="newsletter-section">
    <div className="newsletter-content">
      <span className="small-text">Newsletter</span>
      <span className="big-text">Sign up for latest updates and offers</span>
      <div className="form">
        <input className="input" type="text" placeholder="Email Address" />
        <button className="button" type="submit">Subscribe</button>
      </div>
      <div className="text">will be used in accordance with Privacy Policy</div>
      <div className="social-icons">
        <div className="icon">
          <FaFacebookF className="fa" size={15} />
        </div>
        <div className="icon">
          <FaTwitter className="fa" size={15} />
        </div>
        <div className="icon">
          <FaInstagram className="fa" size={15} />
        </div>
        <div className="icon">
          <FaLinkedinIn className="fa" size={15}/>
        </div>
      </div>
    </div>
  </div>
}
export default Newsletter;