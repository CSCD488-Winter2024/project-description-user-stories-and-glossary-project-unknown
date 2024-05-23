import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

function User({ uid }) {
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState(null);

  // Function to fetch user data from the database
  const fetchUserData = () => {
    const db = getDatabase(); // Get a reference to the database
    const userRef = ref(db, `users/${uid}`); // Reference to the user's data in the database

    // Listen for changes to the user's data
    onValue(userRef, (snapshot) => {
      const data = snapshot.val(); // Get the data from the snapshot
      setUserData(data); // Set the user data state
      if (data && data.role) {
        setRole(data.role); // Set the user role state
      }
    });
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, [uid]);

  return (
    <div className='User'>
      {/* Render the admin button based on user role */}
      {role === 'admin' && (
        <Link to="/admin/home">Admin Page</Link>
      )}

      {/* Render other user information */}
      <p>User UID: {uid}
      
      </p>
      
      {/* Render other user data fields */}
    </div>
  );
}

export default User;
