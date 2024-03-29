import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>QhhvyStore</h1>
            </div>
            <form action="" className="search">
                <input type="search"/>
            </form>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Header;