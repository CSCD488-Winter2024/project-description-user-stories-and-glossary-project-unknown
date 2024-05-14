// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../scripts/FBconfig.js'; // Assuming you have Firebase authentication configured

// // Create the AuthContext
// const AuthContext = createContext();

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);

// // AuthProvider component to manage authentication state
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Function to handle user authentication state changes
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     // Clean up subscription
//     return () => unsubscribe();
//   }, []);

//   const value = {
//     currentUser,
//     // Add other authentication-related functions here if needed
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children} {/* Render children only when authentication state is loaded */}
//     </AuthContext.Provider>
//   );
// };
