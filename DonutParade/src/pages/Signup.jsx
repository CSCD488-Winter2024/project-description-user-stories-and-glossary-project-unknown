// SignUpForm.jsx
import React, { useState } from 'react';
import { auth, db} from '../scripts/FBconfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [error, setError] = useState(null);

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
        carInfo: carInfo
      });

      // Sign-up successful
      console.log("Sign-up successful");
    } catch (error) {
      // Handle sign-up errors
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <h2>Sign Up</h2>
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
        type="password"
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
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Footer />
    </div>
  );
};

export default SignUp;
