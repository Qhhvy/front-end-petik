import React from 'react'
import Hero from "../components/Hero"
import Movies from "../components/Movies"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Movies/>
        <Footer/>
    </div>
  )
}

export default Home
