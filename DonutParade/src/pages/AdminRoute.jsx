// // AdminRoute.jsx
// import React from 'react';

// const AdminRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth(); // Get current user from context
//   const isAdmin = currentUser && currentUser.role === 'admin'; // Check if user is admin

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAdmin ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default AdminRoute;
