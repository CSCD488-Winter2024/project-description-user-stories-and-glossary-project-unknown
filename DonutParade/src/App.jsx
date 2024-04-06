import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Contact from './pages/Contact'
import About from './pages/About'
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
    path: '/order',
    element: <Order />,
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