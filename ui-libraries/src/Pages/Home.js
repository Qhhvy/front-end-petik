import React from 'react'
import Hero from "../components/Hero"
import Products from "../components/Products"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home
