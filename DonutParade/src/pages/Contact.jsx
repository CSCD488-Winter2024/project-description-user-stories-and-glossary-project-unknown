import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonutShop from '../assets/DonutShop.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="Contact">

      <Header />
      <h1 id='contact'>Contact Us</h1>
      <section id='contactContainer'>
        
        
        <img src={DonutShop} alt="Shop" />
        <div class="side-text">
        <p>2152 N Hamilton St, Spokane WA</p>
        <p id='phone-number'>
          <a id="phone-number-button" href="tel:+15094739870">(509) 473-9870</a>
        </p>
        <p>For all inquiries, please email us at <a id="email" href='mailto:donutparadespokane@gmail.com'>donutparadespokane@gmail.com</a></p>
        </div>
        
      </section>


      <Footer />


    </div>
  )
}

export default Contact