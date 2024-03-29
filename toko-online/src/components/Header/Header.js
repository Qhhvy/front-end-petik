import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Header;