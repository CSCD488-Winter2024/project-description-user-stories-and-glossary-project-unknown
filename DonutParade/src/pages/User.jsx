import React from 'react';
import { signOut } from 'firebase/auth'; // Import the signOut function
import { auth } from '../scripts/FBconfig.js'; // Import the auth object

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/User.css';

function User({ uid }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Sign-out successful.
      console.log('User signed out');
    } catch (error) {
      // An error happened.
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className='User'>
      <Header />
      <div id='profileContainer'>
        <img id='profilePic' src='' alt="Profile Picture" />
        <ul id="profile">
          <p>User UID: {uid}</p>
          <li>Username: <span id="username">donutLover</span></li>
          <li>Email: <span id="email">something@yo.com</span></li>
          <li>Phone Number: <span id='phoneNum'>(555) 555-5555</span></li>
          <li>Car Info: <span id='vehicle'>Prius BMW Bright Green</span></li>
          <button onClick={handleSignOut}>Sign Out</button>
        </ul>
      </div>

      <h1 id='prevOrder'>Previous Orders</h1>

      <div id='orderContainer'>
        <div class='orderDetails'>
          <h2 id="orderDate">Order #1</h2>
          <ul id='donutDetails'>
            <li>Donut: <span id='donut'>Glazed</span></li>
            <li>Quantity: <span id='quantity'>1</span></li>
            <li>Price: <span id='price'>$1.00</span></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default User;
