import React from "react";
import { useEffect, useContext } from "react";
import Banner from "./banner/banner";
import Category from "./Category/Category.jsx";
import Products from "./Products/Products";
// import { fetchDataFromApi } from "../../utils/api";
// import { Context } from "../../utils/context";

function Home() {
    // const { categories, setCategories , products ,setProducts } = useContext(Context);
  
    // useEffect(() => {
    //     getCategories();
    // }, []);

    // const getCategories = () => {
    //     fetchDataFromApi("/api/categories?populate=*").then((res) => {
    //         console.log(res);
    //         setCategories(res);
    //         setProducts(res);
    //     });
    // }

    return (<div className="">
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category  />  {/*categories={categories}*/ }
                <Products  headingText="Popular Products" /> {/*products={products}*/}
            </div>
        </div>
    </div>)

};
export default Home;