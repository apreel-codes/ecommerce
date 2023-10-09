import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="mt-4 text-sm border border-red-100">
            <div className="flex flex-row justify-between w-full items-center border border-black-300">
                <Link to="/"><img className="w-10 h-10" src="/images/logo.jpg" alt=""></img></Link>
                <div className="md:w-[85%]">
						<button id="hamburgerMenu" class="md:hidden text-3xl items-center float-right" onClick="initApp()"> &#9776; </button>
						<div className="md:flex flex-row justify-between hidden items-center md:block border">
							<nav className="border md:w-[70%]">
								<ul className="flex flex-row justify-between text-base">
                                    <Link to="/Login">New Arrivals</Link>
                                    <Link to="/Login">All Brands</Link>
                                    <Link to="/Login">Jordan</Link>
                                    <Link to="/Login">Nike</Link>
                                    <Link to="/Login">New Balance</Link>
                                    <Link to="/Login">Adidas</Link>
                                    <Link to="/Login">Crocs</Link>
                                    <Link to="/Login">Blog</Link>
									{/* <router-link :to="{ name: 'FAQ' }">FAQs</router-link> */}
								</ul>
							</nav>
							<div className="flex flex-row justify-between border text-base w-[15%]">
                                <Link to="/Login">Login</Link>
                                <Link to="/SignUp">Sign Up</Link>
							</div>
						</div>	
				</div>
            </div>
        </header>
    )
}

export default Header;