import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Cart.css'
import { CartContext } from '../components/CartContext'
import { getDatabase, ref, push } from "firebase/database";
import {firebaseApp} from "../scripts/FBconfig.js";

let num = 0;
let price = 0.00;

const option1 = document.querySelector('#cartContent');


function Cart() {

  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: 'REMOVE_ONE', payload: { name } });
  };

  const handleAddToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: product, quantity },
    });
  };

  // Handling the orders
  

  const handlePlaceOrder = () => {
    let ordersRef = ref(getDatabase(firebaseApp), 'Orders');
    // Assuming you have additional data like date, Donuts, total, and acc
    const orderData = {
      date: new Date().toISOString(), // Current date and time
      Donuts: state.items, // Assuming state.items contains the donuts in the cart
      total: state.itemCount, // Total items of the order
      acc: "Jakson hehe" 
    };
    console.log(orderData);
    ordersRef.push(orderData);
  };
  
  

  

  return (
    <div className='Cart'>

      <Header />

      <div class="cart-content">

        <section id='cartContent'>

          <br />
    
          {/* <div id='donutTempelate'>
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


          </div> */}

          <ul>
            {state.items.map((item) => (
              <div id='donutTempelate' key={item.name}>
              <img id="donutImage" src={item.image} alt={item.name} />
              <div>
                <div class="name-and-price">
                  <h3 class="order-detail" id='donutName'>{item.name}</h3>
                  <p class="order-detail" id="donutPrice">Price: ${item.price}</p>
                </div>
                <p class="order-detail" id="totalPrice">Total: ${item.price * item.quantity}</p>
                <div class="quantity-row">
                  <button class="order-detail button-in-cart" id='removeDonut' onClick={() => handleRemoveFromCart(item.name)}>-</button>
                  <p class="order-detail" id="donutQuantity">{item.quantity}</p>
                  <button class="order-detail button-in-cart" id='addDonut' onClick={() => handleAddToCart(item)}>+</button>
                </div>
  
            </div>
  
  
            </div>
              
            ))}
          </ul>
          <p>Total items: {state.itemCount}</p>
        {/* <p>Total price: {state.total.toFixed(2)}</p> */}

          {/* <div id='donutTempelate'>
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
            </div> */}


          {/* </div> */}

          <br />

          <h4 id='totalPrice'>Total Price: { }</h4>

        </section>

        <section class="payment-side">
          <div class="payment-box">
            <h3>Payment goes here</h3>
            <button class="order-button" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </section>

      </div>


      <Footer />



    </div>
  )
}

export default Cart
