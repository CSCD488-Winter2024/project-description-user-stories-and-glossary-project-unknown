import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'

let num = 0;
let price = 0.00;

function Cart() {
  return (
    <div className='Cart'>


      <Header />

      <section id='cartContent'>

        <h1>Cart</h1>

        <br />
        
        <div id='option1'>

          <h3>Donut 1</h3>
          <p>Price: ${price}</p>
          <p>Quantity: {num}</p>
          <button id='addDonut'>Add</button>
          <button id='removeDonut'>Remove</button>

        </div>

        <br />

        <div id='option2'>

          <h3>Donut 2</h3>
          <p>Price: ${price}</p>
          <p>Quantity: {num}</p>
          <button id='addDonut'>Add</button>
          <button id='removeDonut'>Remove</button>

        </div>

      </section>

      
      <Footer />
      


    </div>
  )
}

export default Cart