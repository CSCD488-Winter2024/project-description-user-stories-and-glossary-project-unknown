import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBack from '../assets/aboutbackground.png';
import '../styles/About.css';



function About() {
  return (
    <div className="About">

      <Header />

      <div id="About-content">

        <h2>About Us</h2>
        <h3>Under New Management Since 2019!</h3>
        <img src={AboutBack} alt="About Image"/>
        <h1>Hello There!</h1>
        <p>We hope we are a place for the community to gather and enjoy the bestish donuts in Spokane.</p>
        <p>Our donuts are made fresh daily and we use only the finest ingredients.</p>
       
      </div>

      <Footer />

    </div>

  )

}

export default About