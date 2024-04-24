import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/ForgotPassword.css'

function ForgotPassword() {
  return (
    <div className='Forgot'>

        <Header />

        <div id='forgotContainer'>
            <h1>Forgot Password</h1>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <form>
                <input id='email' type='email' placeholder='Email' required />
                <button id='checkEmail' type='submit'>Reset Password</button>
            </form>
        </div>

        <Footer />

    </div>
  )
}

export default ForgotPassword