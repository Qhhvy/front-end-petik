import React from 'react';
import Navbar from '../components/Navbar';
import TeraphistList from '../components/TeraphistList';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Video from '../components/Video';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TeraphistList/>
      <Video/>
      <Footer/>
    </div>
  )
};

export default Home;