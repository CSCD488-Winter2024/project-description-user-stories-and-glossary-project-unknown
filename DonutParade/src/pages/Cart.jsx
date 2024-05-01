import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'

let num = 0;
let price = 0.00;

const option1 = document.querySelector('#cartContent');


function Cart() {
  return (
    <div className='Cart'>


      <Header />

      <section id='cartContent'>

        <h2>Cart</h2>

        <br />
        
        <div id='donutTempelate'>

          <h3 id=''>Donut 1</h3>
          <p>Price: ${price}</p>
          <p>Quantity: {num}</p>
          <p>Total: ${price * num}</p>
          <button id='addDonut'>Add</button>
          <button id='removeDonut'>Remove</button>

        </div>

        <br />

        <h4 id='totalPrice'>Total Price: {}</h4>

      </section>

      
      <Footer />
      


    </div>
  )
}

export default Cart