import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DonutShop from '../assets/DonutShop.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="Contact">

      <Header />

      <div class="month">
        <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>August<br/><span>2021</span></li>
        </ul>
      </div>

      <ul class="weekdays">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>

      <ul class="days">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li><span class="active">10</span></li>
        <li>11</li>
      </ul>
      <section id='contactContainer'>
        <h1 id='contact'>Contact Us</h1>
        <img src={DonutShop} alt="Shop" />
        <p>2152 N Hamilton St, Spokane WA</p>
        <p id='phone-number'>
          <a id="phone-number-button" href="tel:+15094739870">(509) 473-9870</a>
        </p>
        <p>For all inquiries, please email us at <a href='mailto:donutparadespokane@gmail.com'>donutparadespokane@gmail.com</a></p>
      </section>


      <Footer />


    </div>
  )
}

export default Contact