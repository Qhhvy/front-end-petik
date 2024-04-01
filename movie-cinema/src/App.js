// import { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Main from "./components/Main/Main.js"
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js"
import Popular from "./Pages/Movie/Popular.js"
import TopRated from "./Pages/Movie/TopRated.js"
import Detail from "./Pages/Movie/Detail.js"

function App() { // function component

  return (
    /* 
    in html = attributes
    in react = props (properties) */
    // element class
    <div className="container"> 
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/top" element={<TopRated/>}/>
            <Route path="/detail/:id" element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
        {/*<Main/> */}
        <Footer nama="Kahfi Al Ghifari"/>
    </div>
  );
}

export default App;