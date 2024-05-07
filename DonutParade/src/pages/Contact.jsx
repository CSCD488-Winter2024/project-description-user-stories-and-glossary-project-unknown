import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonutShop from '../assets/DonutShop.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="Contact">

      <Header />

      <section id='contactContainer'>
        <h1 id='contact'>Contact Us</h1>
        <img src={DonutShop} alt="Shop" />
        <p>2152 N Hamilton St, Spokane WA</p>
        <p id='phone-number'>
          <a id="phone-number-button" href="tel:+15094739870">(509) 473-9870</a>
        </p>
        <p>For all inquiries, please email us at <a href='mailto:donutparadespokane@gmail.com' style= {{textDecoration: 'underline'}}>donutparadespokane@gmail.com</a></p>
      </section>


      <Footer />


    </div>
  )
}

export default Contact