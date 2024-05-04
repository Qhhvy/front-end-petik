import React from "react";
import Home from "./pages/Home";
import About from "./pages/Tentang";
import Login from "./components/Login";
import Register from "./components/Register";
import Booking from "./pages/Bookings";
import TeraphistDetail from "./components/TeraphistDetail";
import AddBooking from "./components/AddBooking";
import EditBooking from "./components/EditBooking";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="has-background-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/teraphist/:id" element={<TeraphistDetail/>}/>
          <Route path="/create-booking" element={<AddBooking/>}/>   
          <Route path="/edit-booking/:id" element={<EditBooking/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;