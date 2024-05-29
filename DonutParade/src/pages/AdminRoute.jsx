import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAuth } from '../pages/AuthContext'; // Assuming you have an AuthContext that provides the current user

const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const db = getDatabase();
      const userRef = ref(db, `users/${currentUser.uid}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setIsAdmin(data?.role === 'admin');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!loading && (!currentUser || !isAdmin)) {
      navigate('/login');
    }
  }, [loading, currentUser, isAdmin, navigate]);

  if (loading) {
    return <div>Loading...</div>; // or some kind of loading spinner
  }

  return currentUser && isAdmin ? <Component {...rest} /> : null;
};

export default AdminRoute;
