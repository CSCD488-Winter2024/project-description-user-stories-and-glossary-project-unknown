import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import Background from '../assets/BackgroundHome.png';

function Home() {
  return (
    <div className="Home">
      <Header />

      <div className="Home-content">
        <img src={Background} alt="Home Image"/>
        <h1>Donut Parade</h1>
        <p>Serving Spokane Since 1968</p>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
