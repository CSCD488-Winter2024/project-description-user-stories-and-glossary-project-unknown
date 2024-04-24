import React, { useState  } from 'react';
import '../styles/Login.css'
import { auth } from '../scripts/FBconfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import User from './User';


const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const errorMessages = {
    'auth/user-not-found': 'User not found. Please check your email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-email': 'Invalid email. Please enter a valid email address.',
    // Add more custom error messages for other error codes as needed
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      console.log("Login successful");
      setIsLoggedIn(true);;
    } catch (error) {
      // Handle login errors
      console.error(error.message);
      const errorMessage = errorMessages[error.code] || error.message;
      setError(errorMessage);
    }
  };
  if (isLoggedIn) {
    return <User />;
  }

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if error exists */}
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

  

