import React from 'react'
// import Navbar from './Navbar'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import '../styles/AdminHeader.css'

function AdminNav() {
  return (
    <div className='AdminNav'>
       <div class="nav-bar">
        <div class="logo-title">
          <a href="/admin/home"><img src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' /></a>
          <h1>Admin</h1>
        </div>
        
        <div class="nav-options-list">
          <a href="/admin/orders"><h2 class="nav-option">Orders</h2></a>
          <a href="/admin/edit"><h2 class="nav-option">Edit Products</h2></a>
          <a href="/"><h2 class="nav-option">Customer View</h2></a>

        </div>
          
        </div> 
      
    </div>
  )
}

export default AdminNav