// import { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Main from "./components/Main/Main.js"
import Footer from "./components/Footer/Footer.js"

function App() { // function component

  return (
    /* 
    in html = attributes
    in react = props (properties) */
    // element class
    <div className="container"> 
        <Navbar />
        <Main/>
        <Footer nama="Kahfi Al Ghifari"/>
    </div>
  );
}

export default App;