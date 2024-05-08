// AdminRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Custom hook to access authentication state

const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth(); // Get current user from context
  const isAdmin = currentUser && currentUser.role === 'admin'; // Check if user is admin

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
