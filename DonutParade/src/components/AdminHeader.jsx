import React from 'react'
//import Navbar from './Navbar'
import DonutParadeLogo from '../assets/DonutParadeLogoblack.png'
import '../styles/AdminHeader.css'

function AdminNav() {
  return (
    <div className='AdminNav'>

       <div id='adNav' className="navbar mx-2 flex justify-between items-center w-auto text-2xl">
            <a href='/admin/orders'>
                <img src={DonutParadeLogo} alt="Donut Parade Logo" id='DonutParadeLogo' />
                <h3 id='admin'>Admin</h3>
            </a>
            <div className="hidden md:flex dropdown" id='miniNav'>
              <ul className='md:flex gap-4 hidden:menu mx-4'>
                <a href="/admin/orders">Orders</a>
                <a href="/admin/edit">Edit</a>
                <a href="/">Customer View</a>
              </ul>
            </div>
            <details className="md:hidden dropdown mx-6">
              <summary id="nav-toggle" className="m-1 mx-3 btn block md:hidden">
                  <svg className="bg-white text-black h-auto w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </summary>
              <ul id='mobileNav' className="p-2 shadow menu dropdown-content z-[1] bg-purple-200 rounded-box text-lg gap-1">
                  <li><a href="/admin/orders">Orders</a></li>
                  <li><a href="/admin/edit">Edit</a></li>
                  <li><a href="/">Customer View</a></li>
                </ul>
            </details>
            
        </div>
      
    </div>
  )
}

export default AdminNav