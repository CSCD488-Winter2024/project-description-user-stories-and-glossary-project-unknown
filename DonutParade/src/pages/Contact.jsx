import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="Contact">

      <Header />

      <section>
        <h1>Contact</h1>
        <p>Things will go here</p>
        <p id='donut'>🍩</p>
      </section>

      <Footer />


    </div>
  )
}

export default Contact