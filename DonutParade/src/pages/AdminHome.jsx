import React from 'react';
import '../styles/AdminHome.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';

function AdminHome() {
  return (
    <div className="AdminHome">
      <AdminNav />
      <div id="AdminHome">
        <p>Things will go here</p>
      </div>

    </div>
  );
}

export default AdminHome;
