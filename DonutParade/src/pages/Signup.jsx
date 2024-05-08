// SignUpForm.jsx
import React, { useState } from 'react';
import { auth, db} from '../scripts/FBconfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Login from './Login.jsx';
import '../styles/Signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // Track sign-up status
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  


  const handleSignUp = async () => {
    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      // Write user information to the database
      await set(ref(db, `users/${user.uid}`), {
        email: email,
        name: name,
        phone: phone,
        carInfo: carInfo,
        role: 'customer'
      });

      // Sign-up successful
      console.log("Sign-up successful");
      setSuccessMessage('Sign-up successful');
      setIsSignedUp(true); // Update sign-up status
    } catch (error) {
      // Handle sign-up errors
      console.error(error.message);
      setError(error.message);
    }
  };
  if (isSignedUp) {
    return <Login/>;
  }

  return (

    
      
    <div className='Signup'>

       
      <Header />

      <h2>Sign Up</h2>

      <div id='signupContainer'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <input
          type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Info"
          value={carInfo}
          onChange={(e) => setCarInfo(e.target.value)}
        />
        <button id='signed' onClick={handleSignUp}>Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button id='showPassword' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
      <Footer />     
    </div>
  );
};

export default SignUp;
