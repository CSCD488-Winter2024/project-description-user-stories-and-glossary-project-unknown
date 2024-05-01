import React, { useState, useEffect  } from 'react';
import '../styles/Login.css'
import { auth } from '../scripts/FBconfig.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import User from './User';
import listenToAuthState from '../scripts/AuthListener.js';
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
    return <User uid={uid}/>;
  }

  return (
    <div id='loginContainer'>
      <Header />
      <h2>Login</h2>
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
      <button id='yo' onClick={handleLogin}>L🍩gin</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if error exists */}

      <p></p>
      <p>Don't have an account? <a href='/signup'>Sign up here</a></p>
      <Footer />
    </div>
  );
};



export default Login;

  // onValue(dbRef, (snapshot) => {
  //   if (snapshot.exists()) {
  //     var uName = snapshot.child("users/User2/uname").val();
  //     var pWord = snapshot.child("users/User2/pass").val();
      
  //     // console.log(uName);
  //     // console.log(pWord);
      
  //   } else {
  //     console.log("No data available");
  //   }
  // });
 

// function Login() {
//   return (
//     <div className='Login'>

//         <h1>Login</h1>
//         <form id='loginContainer' >
//           <label htmlFor='username'>Username:</label>
//           <input type='text' id='username' name='username' required />
//           <label htmlFor='password'>Password:</label>
//           <input type='password' id='password' name='password' required />
//           <button type='submit' value='Login' id='yo' onClick={loginCheck}>Login</button>

      
//         </form>

//         {/* if login is successful, put the user into the User page */}
        
//         {/* if login is unsuccessful, show an error message */}
//         <p id='error'></p>
//         <p>Don't have an account? <a href='/signup'>Sign up here</a></p>
//     </div>
//   )
// }

//   function loginCheck() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     if (username === uName && password === pWord) {
//       Navigate("/users");
//     } else {
//       document.getElementById('error').innerHTML = 'Invalid username or password';
//     }
//   }

  

