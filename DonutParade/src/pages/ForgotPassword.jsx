// ForgotPassword.jsx
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { firebaseApp } from '../scripts/FBconfig';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="ForgotPassword">
      <Header></Header>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lld3ZsY21sa2V5dXNyMndtOTk2c2llZWVrYml4ZjIzYXkyeWpoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BROFLJSFhP0cMGk/giphy.gif" alt="meme" />
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Password Reset Email</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <Link to="/login">Back to Login</Link>
      <Footer></Footer>
    </div>
  );
};

export default ForgotPassword;
