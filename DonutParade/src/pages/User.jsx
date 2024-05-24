import React, { useEffect, useState }from 'react';
import { signOut } from 'firebase/auth'; // Import the signOut function
import { auth, firebaseApp } from '../scripts/FBconfig.js'; // Import the auth object
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from 'react-router-dom';
import RoleChecker from './RoleChecker.jsx';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/User.css';

const dbRef = ref(getDatabase(firebaseApp));


function User({ uid }) {
  
  
  const [userData, setUserData] = useState(null);

  // Function to fetch user data from the database
  const fetchUserData = () => {
    const db = getDatabase(); // Get a reference to the database
    const userRef = ref(db, `users/${uid}`); // Reference to the user's data in the database

    // Listen for changes to the user's data
    onValue(userRef, (snapshot) => {
      const data = snapshot.val(); // Get the data from the snapshot
      setUserData(data); // Set the user data state
    });
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, [uid]);


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
        <img id='profilePic' src='https://media2.giphy.com/media/Z8TMfZMaee8t2minLW/giphy.webp?cid=790b7611389jztomi8aborp21f9ei0ra2ce214gfm0qyfnsm&ep=v1_gifs_search&rid=giphy.webp&ct=gf' alt="Profile Picture" />
        <ul id="profile">
          {userData && (
            <>
              <p id = 'hideme'>User UID: {uid}</p>
              
              {userData.email && <li>Email: <span id="email">{userData.email}</span></li>}
              {userData.name && <li>Name: <span id="Name">{userData.name}</span></li>}
              {userData.phoneNum && <li>Phone #: <span id="phone">{userData.phoneNum}</span></li>}
              {userData.carInfo && <li>Car Info: <span id="Car Info">{userData.carInfo}</span></li>}
              {userData.role === 'admin' && ( // Render link only if user has admin role
                <li>
                  <Link to="/admin/orders">Admin Page</Link>
                </li>
              )}
              

              {/* Add other user data fields as needed */}
            </>
          )}
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
      <RoleChecker userId={uid} /> 

      <Footer />
      
    </div>
  );
  
  
  
}


export default User;
