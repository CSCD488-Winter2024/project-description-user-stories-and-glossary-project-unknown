import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Cart.css';
import { CartContext } from '../components/CartContext';
import { getDatabase, ref, push, get, child } from 'firebase/database';
import { firebaseApp, db } from '../scripts/FBconfig.js';
import { getAuth } from 'firebase/auth';

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

  const handlePlaceOrder = () => {
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    if (!userId) {
      console.error("User is not authenticated");
      return;
    }

    const dbRef = ref(getDatabase(firebaseApp));
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();

        push(ref(db, 'Order'), {
          date: new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date()),
          Donuts: state.items,
          itemCount: state.itemCount,
          total: state.total,
          acc: userData.name,
          email: userData.email,
          carInfo: userData.carInfo,
          status: 'Awaiting Approval',
        });
      } 
      else {
        console.error("No user data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className='Cart'>
      <Header />
      <div className='cart-page-content'>
        <section id='cartContent'>
          <br />
          <ul>
            {state.items.map((item) => (
              <div id='donutTemplate' key={item.name}>
                <img id='donutImage' src={item.image} alt={item.name} />
                <div className='left-align-info'>
                  <div className='name-and-price'>
                    <h3 className='order-detail' id='donutName'>{item.name}</h3>
                    <p className='order-detail' id='donutPrice'>Price: ${item.price}</p>
                  </div>
                  <p className='order-detail' id='totalPrice'>Total: ${item.price * item.quantity}</p>
                  <div className='quantity-row'>
                    <button className='order-detail button-in-cart' id='removeDonut' onClick={() => handleRemoveFromCart(item.name)}>-</button>
                    <p className='order-detail' id='donutQuantity'>{item.quantity}</p>
                    <button className='order-detail button-in-cart' id='addDonut' onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <p id='totalQuantity'>Total items: {state.itemCount}</p>
          <br />
          <h4 id='totalPrice'>Total Price: ${state.total}</h4>
        </section>
        <section className='payment-side'>
          <div className='payment-box'>
            <h3>Payment goes here</h3>
            <button className='order-button' onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </section>

      </div>

      <Footer />

    </div>

  );
}

export default Cart;
