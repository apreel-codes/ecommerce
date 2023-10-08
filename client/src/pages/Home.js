import Header from "../components/header";
import { Routes, Route, Link } from 'react-router-dom';
import React from "react";

const Home = () => {
    return (
        <div>
            <Header />
            <p>This is Home page</p>
            <Link to="/SignUp">Sign Up</Link>
            <Link to="/NewBrand">NewBrand</Link>
            <Link to="/Collection">Collection</Link>
        </div>
    )
}


export default Home;