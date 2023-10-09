import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Checkout from "./pages/Checkout";
import Collection from "./pages/Collection";
import NewBrand from "./pages/NewBrand";
import NewProduct from "./pages/NewProduct";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/NoPage";
import Login from "./pages/Login";
import Footer from "./components/footer";

// components
import Input from "./components/input";
import Header from "./components/header";
function App() {
  return (
    <div id="app" class="flex flex-col">
      <div className="container mx-auto md:px-36">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/NewBrand" element={<NewBrand />} />
            <Route path="/Brand" element={<Brand />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/NewProduct" element={<NewProduct />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Login" element={<Login />} /> 
            {/* error page should be the last page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
