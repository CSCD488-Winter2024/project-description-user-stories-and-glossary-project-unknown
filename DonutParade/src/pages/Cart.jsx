import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { CartContext } from '../components/CartContext'

let num = 0;
let price = 0.00;

const option1 = document.querySelector('#cartContent');


function Cart() {

  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { name } });
  };

  
  

  

  return (
    <div className='Cart'>


      <Header />
      <div class="cart-content">
        <section id='cartContent'>

          <h2>Cart</h2>

          <br />
    
          <div id='donutTempelate'>
            <img id="donutImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7-zZ1ANn7A0WUX7M0hMfUQHaHa%26pid%3DApi&f=1&ipt=d629d9c0984eeee12dd1780034285437bae02281cf7442ba6e810c0785dcd001&ipo=images" alt="Item Image" />
            <div>
              <div class="name-and-price">
                <h3 class="order-detail" id='donutName'>Donut 1</h3>
                <p class="order-detail" id="donutPrice">Price: ${price}</p>
              </div>
              <p class="order-detail" id="totalPrice">Total: ${price * num}</p>
              <div class="quantity-row">
                <button class="order-detail button-in-cart" id='removeDonut'>-</button>
                <p class="order-detail" id="donutQuantity">{num}</p>
                <button class="order-detail button-in-cart" id='addDonut'>+</button>
              </div>

            </div>


          </div>
          <div id='donutTempelate'>
            <img id="donutImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7-zZ1ANn7A0WUX7M0hMfUQHaHa%26pid%3DApi&f=1&ipt=d629d9c0984eeee12dd1780034285437bae02281cf7442ba6e810c0785dcd001&ipo=images" alt="Item Image" />
            <div>
              <div class="name-and-price">
                <h3 class="order-detail" id='donutName'>Donut 1</h3>
                <p class="order-detail" id="donutPrice">Price: ${price}</p>
              </div>
              <p class="order-detail" id="totalPrice">Total: ${price * num}</p>
              <div class="quantity-row">
                <button class="order-detail button-in-cart" id='removeDonut'>-</button>
                <p class="order-detail" id="donutQuantity">{num}</p>
                <button class="order-detail button-in-cart" id='addDonut'>+</button>
              </div>

            </div>


          </div>

          <br />

          <h4 id='totalPrice'>Total Price: { }</h4>

        </section>
        <section class="payment-side">
          <div class="payment-box">
            <h3>Payment goes here</h3>
          </div>
        </section>

      </div>


      <Footer />



    </div>
  )
}

export default Cart