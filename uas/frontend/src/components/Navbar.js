import React from 'react';
import logo from "../assets/img/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="level has-background-white mb-5 pt-3">
            <p className="level-item has-text-centered">
                <NavLink to="/" className="link is-info">Home</NavLink>
            </p>
            <p className="level-item has-text-centered">
                <NavLink to="/about" className="link is-info">About</NavLink>
            </p>
            <p className="level-item has-text-centered">
                <img
                src={logo}
                alt=""
                style={{ "height": "65px" }}
                />
            </p>
            <p className="level-item has-text-centered">
                <NavLink to="/booking" className="link is-info">Booking</NavLink>
            </p>
            <p className="level-item has-text-centered">
                <NavLink to="/login">                            
                    <button class="button is-primary">Login</button>
                </NavLink>
            </p>
        </nav>
    </div>
  )
};

export default Navbar;
