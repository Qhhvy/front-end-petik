import React from "react";
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <div class="conteiner">
                <section class="hero">
                    <div class="hero-left">
                        <h2 class="hero-title">Star Wars</h2>
                        <h3 class="hero-genre">Genre : Sci-Fi</h3>
                        <p class="hero-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, similique magni assumenda vitae reprehenderit eaque alias, incidunt, velit sequi asperiores nobis aspernatur soluta itaque dolorem!
                        </p>
                        <p className="hero-button">Watch</p>
                        <div class="hero-right">
                            <img src="https://i.ebayimg.com/images/g/EWgAAOSwyP5aJeiu/s-l1200.jpg" alt="hero-img" class="hero-img"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;