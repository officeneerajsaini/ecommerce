import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
// import Banner from "./components/Home/banner/banner";
import Category from "./components/Category/Category";
// import Product from "./components/Product/Product";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
// import AppContext from "./utils/context";




function App() {
  return (
    <BrowserRouter>
      {/* <AppContext> */}
        <Header />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes> */}
        <Home/>
        <Category/>
        <Newsletter />
        <Footer />
      {/* </AppContext> */}
    </BrowserRouter>

  );
};

export default App;
