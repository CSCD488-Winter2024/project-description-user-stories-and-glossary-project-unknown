import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import User from './pages/User'
import ErrorPage from './pages/ErrorPage'



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