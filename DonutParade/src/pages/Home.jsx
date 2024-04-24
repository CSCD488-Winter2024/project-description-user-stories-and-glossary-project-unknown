import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Background from '../assets/BackgroundHome.png';

function Home() {
  return (
    <div className="Home">
      <Header />

      <div id="Home-content">
        
        <h1>Donut Parade</h1>
        <p>Serving Spokane Since 1968</p>
        <img src={Background} alt="Home Image"/>
      </div>
      
      <Footer />
      
    </div>
  );
}

export default Home;
