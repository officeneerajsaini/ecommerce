import React from "react";
import "./banner.scss";
import BannerImg from "./bannerHeadphone.png";

function Banner() {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-contents">
                <p className="p1">SALES</p>
                <p className="p2">Elevate your senses with headphone quality that's beyond compare,<br /> where every sound becomes an unforgettable experience</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="bannerHeadphone" src={BannerImg} alt="Banner-Headphone" />
            {/* md:mt-[50px] md:mr-[60px] xxl:h-[720px] xxl:w-[720px]  xxl:mt-[0px] xxl:mr-[0px] md:bottom-[120px]  md:mb-[0px]*/}
        </div>
    </div>
}

export default Banner;

