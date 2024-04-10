import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Order.css'

function Order() {
  return (
    <div>


      <Header />

      <section>
        <h1>Order</h1>
        <p>Things will go here</p>
        <p id='donut'>🍩</p>

      </section>

      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default Order