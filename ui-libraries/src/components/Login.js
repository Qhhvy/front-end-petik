import React from 'react';
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fulwidth">
        <div className="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4">
                        <form action="" className="box">
                            <h3 className="title has-text-primary">Login</h3>
                            <div className="field">
                                <label className="label">Email</label>
                                <input className="input" type="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <input className="input" type="password" placeholder="Password" />
                            </div>
                            <div className="field">
                                <button className="button is-success is-fullwidth">Login</button>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login
