import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Thanks.css'

function Thanks() {
  return (
    <div className='Thanks'>

        <Header />

        <div id='thanksContainer'>
            <h1>Thank you for your order! Check email for order status!</h1>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXhmd2d4amI0ZnF1bjVhaXd1eTRzanczdjk3d3Z1aHFkeXdzNXdxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/osjgQPWRx3cac/giphy.webp" alt="meme" />
            
        </div>

        <Footer />

    </div>
  )
}

export default Thanks