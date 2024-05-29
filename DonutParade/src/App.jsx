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
