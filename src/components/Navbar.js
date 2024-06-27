import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/rainbow services logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <a href="mailto:sales@rainbowsoftwaresolutions.com">Email</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    {/* <a href="#">Get Started</a> */}
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
