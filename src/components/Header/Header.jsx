import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Serach/Search"; 
import Cart from "../Cart/Cart";
// import { context } from "../../utils/context";
import "./Header.scss";

function Header() {
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    //const [scrolled , setScrolled ] = useState(false);

    //const handleScroll = () => {
    //  const offset = window.scrollY;
    //  if(offset > 200){
    //     setScrolled(true);
    //  }
    //  else {
    //     setScrolled(false);
    //  }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll",handleScroll)
    // },[]);

    return <div>
        <>
            <header className={"main-header"}>  {/*${scrolled ? 'sticky-header' : ''}*/}
                <div className="header-content">
                    <ul className="left">
                        <li><a href="#homeSection" className="headerLi ">Home</a></li>
                        <li><a href="#aboutSection" className="headerLi ">About</a></li>
                        <li><a href="#categoriesSection" className="headerLi ">Categories</a></li>
                    </ul>
                    <div className="center">NSDEVSTORE</div>
                    <div className="right">
                        <TbSearch className="spanIcon"  onClick={() => { setShowSearch(true) }} />
                        <AiOutlineHeart className="spanIcon" />
                        <span className="cart-icon" onClick={() => { setShowCart(true) }}>
                            <CgShoppingCart className="spanIcon" />
                            <span>7</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    </div>;
}
export default Header;
