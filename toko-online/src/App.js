import React from "react";
import "./App.css"
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Main />
      <Footer nama="Kahfi Al Ghifari"/>
    </div>
  );
}

export default App;
