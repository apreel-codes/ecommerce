import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div className="header relative">
            <header className="">
            <div className="flex absolute bottom-7 justify-between w-full items-center px-14">
                <button className="text-3xl text-white" type="submit"><i class="fa fa-search"></i></button>
                {/* <Link to="/"><img className="w-10 h-10" src="/images/logo.jpg" alt=""></img></Link> */}
                <div className="md:w-[80%]">
						<button id="hamburgerMenu" class="md:hidden text-3xl items-center float-right" onClick="initApp()"> &#9776; </button>
						<div className="md:flex flex-row justify-between hidden items-center md:block">
							<nav className="md:w-[70%] text-gray-100">
								<ul className="flex flex-row justify-between text-lg">
                                    <Link to="/">New Arrivals</Link>
                                    <Link to="/brands">All Brands</Link>
                                    <Link to="/jordan">Jordan</Link>
                                    <Link to="/jordan">Nike</Link>
                                    <Link to="/newbalance">New Balance</Link>
                                    <Link to="/adidas">Adidas</Link>
                                    <Link to="/crocs">Crocs</Link>
                                    <Link to="/blog">Blog</Link>
									{/* <router-link :to="{ name: 'FAQ' }">FAQs</router-link> */}
								</ul>
							</nav>
							<div className="flex flex-row justify-between text-lg text-gray-100 w-[10%]">
                                <Link to="/Login">Login</Link>
                                <Link to="/register">Sign Up</Link>
							</div>
						</div>	
				    </div>
                </div>
            </header>
            
        </div>
    )
}

export default Header;