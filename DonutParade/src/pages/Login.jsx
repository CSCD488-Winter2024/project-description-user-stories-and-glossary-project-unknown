import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import { auth } from '../scripts/FBconfig.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import User from './User';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const errorMessages = {
    'auth/user-not-found': 'User not found. Please check your email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-email': 'Invalid email. Please enter a valid email address.',
    // Add more custom error messages for other error codes as needed
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const uid = user.uid;
        console.log('User UID:', uid);
        setUid(uid); // Set the UID state
        setIsLoggedIn(true); // Set the isLoggedIn state
      } else {
        // No user is signed in.
        console.log('No user signed in.');
        setIsLoggedIn(false); // Set the isLoggedIn state
        setUid(null); // Reset the UID state
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []); 

  const handleLogin = async () => {
    // e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      console.log("Login successful");
      setIsLoggedIn(true);
    } catch (error) {
      // Handle login errors
      console.error(error.message);
      const errorMessage = errorMessages[error.code] || error.message;
      setError(errorMessage);
    }
  };

  if (isLoggedIn) {
    return <User uid={uid} />;
  }

  return (
    <div className='Login'>

      <Header />

      <div id='centerContent'>
        {/* <h1 id='h1'>Welcome!</h1> */}
        <h2 id='sign-in'>Sign In</h2>
        <form>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="button"
            id="donut"
            value="L🍩G I N"
            onClick={handleLogin}
          />

          {/* <button id='donut' onClick={handleLogin}>L 🍩 G I N</button> */}

        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p id='p'>Don't have an account? <a href='/signup' style={{ textDecoration: 'underline' }}>Sign up here</a></p>
        <p id='p'>Forgot Password? <a href='/forgot' style={{ textDecoration: 'underline' }}>Reset here</a></p>

      </div>

      <Footer />

    </div>
  );
};

export default Login;
