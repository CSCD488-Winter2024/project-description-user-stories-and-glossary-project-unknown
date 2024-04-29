import React from 'react';
import '../styles/AdminOrders.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';

function AdminOrders() {
  return (
    <div className="AdminOrders">
      <AdminNav />
      <div id="Admin-content">
        <div class="order-nav">
          <div class="filter-list">
            <h2 class="filter-button">Approved</h2>
            <h2 class="filter-button">Awaiting Approval</h2>
            <h2 class="filter-button">Rejected</h2>
            <h2 class="filter-button">Completed</h2>
          </div>
        </div>
        <div class="admin-list">
          <div class="order">
            <h2 class="order-number">#Order number</h2>
            <div class="order-box-row">
              <div class="order-section">

                <h3 class="order-name">First Last</h3>
                <h4 class="order-contact">Contact</h4>
              </div>
              <div class="order-section">
                <h3>Dozen Donuts</h3>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p>
              </div>
              <div class="order-section">
                <div class="button-col">
                  <button class="order-buttons">Approve</button>
                  <button class="order-buttons">Reject</button>
                  <button class="order-buttons">Edit</button>
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminOrders;
