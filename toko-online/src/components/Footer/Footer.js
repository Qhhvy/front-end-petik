import React from "react";
import "./Footer.css";

const Footer = (props) => {
    const {nama} = props;

    return (
        <footer className="footer">
            <h3>Copyright &copy; 2024 Developed by {nama}</h3>
            <span>make with &#10084;</span>
        </footer>
    )
};

export default Footer;