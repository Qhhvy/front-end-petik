import React from 'react';
import "bulma/css/bulma.min.css";
import { NavLink } from'react-router-dom';
import Logo from "../../images/pngwing.com.png";

const Login = () => {
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
                            <h3 className="title has-text-primary">Login</h3>
                            <div className="field">
                                <label className="label">Email</label>
                                <input className="input" type="email" placeholder="yourname@example.com" />
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <input className="input" type="password" placeholder="********" />
                            </div>
                            <div className="field">
                                <button className="button is-success is-fullwidth has-text-white">Login</button>
                            </div>
                            <div className="field">
                                <p>Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink></p>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
};

export default Login;
