import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Cart.css';
import { CartContext } from '../components/CartContext';
import { getDatabase, ref, push, get, child } from "firebase/database";
import { firebaseApp, db } from "../scripts/FBconfig.js";
import { getAuth } from "firebase/auth";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [pickupOption, setPickupOption] = useState('In-store Pickup'); // Default to in-store pickup
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility
  const [pickupTime, setPickupTime] = useState(''); // State to store pickup time
  const [formData, setFormData] = useState({ name: '', email: '', carMake: '', carModel: '', carColor: '' }); // State to store form data

  const handleRemoveFromCart = (name) => {
    dispatch({ type: 'REMOVE_ONE', payload: { name } });
  };

  const handleAddToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item: product, quantity },
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const processOrder = (userData) => {
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
      carInfo: pickupOption === 'Curbside' ? userData.carInfo || formData.carInfo : '', // Include carInfo only if curbside
      phone: userData.phone || '', // Default to empty if phone is not available
      pickupOption: pickupOption, // Include the pickup option
      pickupTime: new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(pickupTime)), // Include the pickup time
      status: 'Awaiting Approval',
    }).then(() => {
      console.log("Order placed successfully");
      handleClearCart(); // Clear the cart after placing the order
      window.location.href = '/thanks'; // Navigate to the Thanks page      

    }).catch((error) => {
      console.error("Error placing order:", error);
    });
  };

  const handlePlaceOrder = () => {
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    if (!userId) {
      setIsFormVisible(true); // Show the form if the user is not logged in
      return;
    }

    try {
      let date = new Date(pickupTime);
      if (isNaN(date.getTime())) {
        //send an alert if the date is invalid
        alert("Invalid pickup time");
        console.error("Invalid pickup time");
        return;
      }
      if (date < new Date()) {
        //send an alert if the pickup time is in the past
        alert("Pickup time must be in the future");
        console.error("Pickup time must be in the future");
        return;
      }
    } catch (error) {
      alert("An error occurred" + error);
      console.error("Invalid pickup time");
      return;
    }

    const dbRef = ref(getDatabase(firebaseApp));
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        processOrder(userData);
        handleClearCart(); // Clear the cart after placing the order
      } else {
        console.error("No user data available / Log in required");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const carInfo = `${formData.carMake} ${formData.carModel} ${formData.carColor}`;
      const userData = { name: formData.name, email: formData.email, carInfo: carInfo, phone: '' };
      processOrder(userData);
      setIsFormVisible(false); // Hide the form after submitting
    } else {
      console.error("Name and email are required to place the order.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='Cart'>
      <Header />
      <div className="cart-page-content">
        <section id='cartContent'>
          <br />
          <ul>
            {state.items.map((item) => (
              <div id='donutTempelate' key={item.name}>
                <img id="donutImage" src={item.image} alt={item.name} />
                <div className="left-align-info">
                  <div className="name-and-price">
                    <h3 className="order-detail" id='donutName'>{item.name}</h3>
                    <p className="order-detail" id="donutPrice">Price: ${item.price}</p>
                  </div>
                  <p className="order-detail" id="totalPrice">Total: ${item.price * item.quantity}</p>
                  <div className="quantity-row">
                    <button className="order-detail button-in-cart" id='removeDonut' onClick={() => handleRemoveFromCart(item.name)}>-</button>
                    <p className="order-detail" id="donutQuantity">{item.quantity}</p>
                    <button className="order-detail button-in-cart" id='addDonut' onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <p id="totalQuantity">Total items: {state.itemCount}</p>
          <br />
          <h4 id='totalPrice'>Total Price: ${state.total}</h4>
        </section>
        <section className="payment-side">
          <div className="payment-box">
            <h3>Pickup Option</h3>
            <select id="pickup-dropdown" value={pickupOption} onChange={(e) => setPickupOption(e.target.value)}>
              <option className="option" value="In-store Pickup">In-Store Pickup</option>
              <option className="option" value="Curbside">Curbside</option>
            </select>
            <h3>Pickup Time</h3>
            <p>
              Date and Time : <input className="date-in" type="datetime-local" onChange={(e) => setPickupTime(e.target.value)} />
            </p>
            {isFormVisible ? (
              <form className="checkout-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                {pickupOption === 'Curbside' && (
                  <div className="form-row">
                    <input type="text" name="carMake" placeholder="Car Make" value={formData.carMake} onChange={handleInputChange} required />
                    <input type="text" name="carModel" placeholder="Car Model" value={formData.carModel} onChange={handleInputChange} required />
                    <input type="text" name="carColor" placeholder="Car Color" value={formData.carColor} onChange={handleInputChange} required />
                  </div>
                )}
                <button id="submit-button" type="submit">Submit</button>
              </form>
            ) : (
              <button className="order-button" onClick={handlePlaceOrder}>Place Order</button>
            )}
            <p>Note: Payments are processed in store only.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
