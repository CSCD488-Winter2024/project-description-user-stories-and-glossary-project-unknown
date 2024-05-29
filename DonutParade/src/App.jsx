import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import User from './pages/User';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ErrorPage from './pages/ErrorPage';
import AdminOrders from './pages/AdminOrders';
import AdminEdit from './pages/AdminEdit';
import AdminHome from './pages/AdminHome';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './pages/AuthContext'; // Import AuthProvider
import AdminRoute from './pages/AdminRoute'; // Import the AdminRoute component
const routes = [
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
    path: '/admin',
    element: <Outlet />, // Use Outlet for nested routes
    children: [
      {

        path: 'orders',
        element: <AdminRoute component={AdminOrders} />, // Wrap with AdminRoute
      },
      {
        path: 'edit',
        element: <AdminRoute component={AdminEdit} />, // Wrap with AdminRoute
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
