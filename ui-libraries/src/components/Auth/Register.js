import React from 'react';
import "bulma/css/bulma.min.css";
import { NavLink } from'react-router-dom';
import Logo from "../../images/pngwing.com.png";

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fulwidth">
        <div className="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4">
                        <form action="" className="box">
                            <div className="field is-flex is-aligns-items-center">
                                <NavLink to={"/"}>
                                    <img src={Logo} alt="logo-jkt"/>
                                </NavLink>
                            </div>
                            <h3 className="title has-text-primary">Register</h3>
                            <div className="field">
                                <label className="label" for="name">Name</label>
                                <input className="input" type="text" placeholder="Your Name" id="name"/>
                                {/* input role user */}
                                <input type="hidden" name="" id=""/>
                            </div>
                            <div className="field">
                                <label className="label" for="email">Email</label>
                                <input className="input" type="email" placeholder="joseph@example.com" id="email"/>
                            </div>
                            <div className="field">
                                <label className="label" for="password">Password</label>
                                <input className="input" type="password" placeholder="********" id="password"/>
                            </div>
                            <div className="field">
                                <label className="label" for="confirmPassword">Confirm Password</label>
                                <input className="input" type="password" placeholder="********" id="confirmPassword"/>
                            </div>
                            <div className="field">
                                <button className="button is-success is-fullwidth has-text-white">Register</button>
                            </div>
                            <div className="field">
                                <p>Sudah punya akun? <NavLink to={"/login"}>Login</NavLink></p>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
};

export default Register;
