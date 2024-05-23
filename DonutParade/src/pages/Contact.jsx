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
        
        
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372.693359511857!2d-117.39888412373733!3d47.67768688306616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e18dcc8daab87%3A0xe1ce23d8a13f20e0!2sDonut%20Parade!5e0!3m2!1sen!2sus!4v1716504765524!5m2!1sen!2sus" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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