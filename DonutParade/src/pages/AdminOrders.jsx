import {React, useState, useEffect} from 'react';
import '../styles/AdminOrders.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';
import ApproveArrow from '../assets/Approve.png'
import RejectX from '../assets/Reject.png'
import Arrow from '../assets/Arrow.png'
import { ref, get, update, onValue } from "firebase/database";
import {firebaseApp, db} from "../scripts/FBconfig.js";
// import { useState } from 'react';

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // const fetchOrders = async () => {
    //   try {
    //     const ordersRef = ref(db, 'Order'); // Node where orders are stored
    //     const snapshot = await get(ordersRef);
    //     if (snapshot.exists()) {
    //       const data = snapshot.val(); // Returns a plain JavaScript object
    //       // Convert the object into an array of products
    //       const orderList = Object.entries(data).map(([id, order]) => ({
    //         id,
    //         ...order,
    //       }));
    //       setOrders(orderList);
    //     } else {
    //       console.log('No orders found');
    //     }
    //   } catch (e) {
    //     console.log(`Error fetching data: ${e.message}`);
    //   }
    // };

    // fetchOrders();
    const ordersRef = ref(db, 'Order');
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      const orderList = Object.entries(data).map(([id, order]) => ({
        id,
        ...order,
      }));
      setOrders(orderList);
    });
    //console.log(orders);
  }, []);

  const handleApproveOrder = (id) => {
    // Update the order status to 'Approved'
    const orderRef = ref(db, `Order/${id}`);
    update(orderRef, { status: 'Approved' });
  };

  const handleRejectOrder = (id) => {
    // Update the order status to 'Rejected'
    const orderRef = ref(db, `Order/${id}`);
    update(orderRef, { status: 'Rejected' });
  };


  const getOrderClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'approved';
      case 'Awaiting Approval':
        return 'awaiting-approval';
      case 'Rejected':
        return 'rejected';
      case 'Completed':
        return 'completed';
      default:
        return 'order';
    }
  }





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
          {orders.map((order) => (
            <div class={getOrderClass(order.status)} key={order.id}>
            <div class="order-box-row">
              <h1 class="order-number">{order.id}</h1>
              <h2 class="order-time">{order.date}</h2>
            </div>

            <div class="order-box-row">
              <div class="order-section">

                <h3 class="order-name">{order.acc}</h3>
                <h3 class="order-contact">Contact</h3>

              </div>
              <div class="order-section">
                {Object.entries(order.Donuts).map(([key, donut]) => (
                  <p key={key}>{donut.name} x {donut.quantity}</p>
                ))}
                {/* <h3>Dozen Donuts</h3>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p>
                <p>Chocolate</p> */}
              </div>
              <div class="order-section">
                <div class="button-col">

                  <button class="order-buttons" onClick={() => handleApproveOrder(order.id)}><img src={ApproveArrow} alt="Approve" /></button>
                  <button class="order-buttons" onClick={() => handleRejectOrder(order.id)}><img src={RejectX} alt="Reject" /></button>
                  <button class="order-buttons"><img src={Arrow} alt="Edit" /></button>
                </div>

              </div>
            </div>



          </div>
          ))}
          {/* <div class="order">
            <div class="order-box-row">
              <h1 class="order-number">#Order number</h1>
              <h2 class="order-time">EST. 12:00 PM</h2>
            </div>

            <div class="order-box-row">
              <div class="order-section">

                <h3 class="order-name">First Last</h3>
                <h3 class="order-contact">Contact</h3>

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

                  <button class="order-buttons"><img src={ApproveArrow} alt="Approve" /></button>
                  <button class="order-buttons"><img src={RejectX} alt="Reject" /></button>
                  <button class="order-buttons"><img src={Arrow} alt="Edit" /></button>
                </div>

              </div>
            </div>



          </div> */}
        </div>
      </div>

    </div>
  );
}

export default AdminOrders;
