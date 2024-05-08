import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import User from './pages/User'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ErrorPage from './pages/ErrorPage'
import AdminOrders from './pages/AdminOrders'
import AdminEdit from './pages/AdminEdit'
import AdminHome from './pages/AdminHome'
import AdminRoute from './pages/AdminRoute'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
  },
  
  {
    path: '/admin/home',
    element: <AdminHome />,
  },
  {
    path: '/admin/orders',
    element: <AdminOrders />,
  },
  {
    path: '/admin/edit',
    element: <AdminEdit />,
  },
  {
    path: '/admin',
    element: <AdminRoute />,

  },
  {
    path: '*',
    element: <ErrorPage />,
  }

])

function App() {

  return (
      <div className='App'>

        <RouterProvider router={router} />
        
      </div>
  )
}

export default App