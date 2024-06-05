import {React, useState, useEffect} from 'react';
import '../styles/AdminOrders.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';
import ApproveArrow from '../assets/Approve.png'
import RejectX from '../assets/Reject.png'
import EditIcon from '../assets/EditIcon.png'
import Completed from '../assets/Completed.png'
import { ref, get, update, onValue, set } from "firebase/database";
import {firebaseApp, db} from "../scripts/FBconfig.js";
import * as XLSX from 'xlsx';

// import { useState } from 'react';

function AdminOrders() {

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editMode, setEditMode] = useState(false);
  const [curOrder, setCurOrder] = useState(null);
  const [editableDonuts, setEditableDonuts] = useState([]);
  const [pickupOption, setPickupOption] = useState('');
  const [pickupTime, setPickupTime] = useState('');

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



  const handleCompleteOrder = (id) => {
    // Update the order status to 'Completed'
    const orderRef = ref(db, `Order/${id}`);
    update(orderRef, { status: 'Completed' });
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

let count =0;

//Filters
 

 const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.status === filter);
  
//Editing
    const handleEditOrder = (order) => {
      // Set editMode
      setEditMode(true);
      setCurOrder(order.id);
      //console.log(order.Donuts);
      setEditableDonuts(order.Donuts);
      setPickupOption(order.pickupOption);
      setPickupTime(order.pickupTime);
      //console.log(editableDonuts);
    };

     const handleSaveOrder = () => {
      // Logic to save the edited order
      const orderRef = ref(db, `Order/${curOrder}`);
      // Calc new total items and price
      let newTotal = 0;
      let newItems = 0;
      editableDonuts.forEach((donut) => {
        newTotal += donut.price * donut.quantity;
        newItems += donut.quantity * 1;
      });
      let dateFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(pickupTime));
      update(orderRef, { Donuts: editableDonuts, total: newTotal, itemCount: newItems, pickupOption: pickupOption, pickupTime: dateFormat});
      setEditMode(false);
      setCurOrder(null);
      setEditableDonuts([]);
     };

    const handleDonutChange = (id, key, value) => {
      const updatedDonuts = editableDonuts.map((donut) => {
        if (donut.id === id) {
          return { ...donut, [key]: value };
        }
        return donut;
      });
      setEditableDonuts(updatedDonuts);
    };

    const handleRemoveDonut = (id) => {
      setEditableDonuts(editableDonuts.filter((donut) => donut.id !== id));
    };

    const exportCompletedOrdersToExcel = () => {
      const completedOrders = orders.filter(order => order.status === 'Completed');
      const orderData = completedOrders.map(order => ({
        'Order ID': order.id,
        'Account': order.acc,
        'Email': order.email,
        'Phone': order.phone,
        'Car Info': order.carInfo,
        'Item Count': order.itemCount,
        'Total Price': order.total,
        'Pickup Option': order.pickupOption,
        'Pickup Time': order.pickupTime,
        'Donuts': order.Donuts.map(donut => `${donut.name} x ${donut.quantity}`).join(', '),
      }));
  
      const worksheet = XLSX.utils.json_to_sheet(orderData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Completed Orders');
      const date = new Date();
      const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      XLSX.writeFile(workbook, `CompletedOrders_${dateString}.xlsx`);
    };

    // const handleAddDonut = () => {
    //   //setEditableDonuts([...editableDonuts, { id: `new-${Date.now()}`, name: '', quantity: 1 }]);
    // };

  return (
    <div className="AdminOrders">
      <AdminNav />
      <div id="Admin-content">
        <div class="order-nav">
          <div class="filter-list">
            <button class="filter-button" onClick={() => setFilter('All')}>All</button>
            <button class="filter-button" onClick={() => setFilter('Approved')}>Approved</button>
            <button class="filter-button" onClick={() => setFilter('Awaiting Approval')}>Awaiting Approval</button>
            <button class="filter-button" onClick={() => setFilter('Rejected')}>Rejected</button>
            <button class="filter-button" onClick={() => setFilter('Completed')}>Completed</button>
            <button className="filter-button" onClick={exportCompletedOrdersToExcel}>Export Completed Orders</button>
          </div>
        </div>
        <div class="admin-list">
          
          {filteredOrders.map((order) => (
            <div class={getOrderClass(order.status)} key={order.id}>
            <div class="order-box-row">
              <h1 class="order-number">Order {order.id}</h1>
              <h2 class="order-time">{order.date}</h2>
            </div>

            <div class="order-box-row">
              <div class="order-section">

                <h2 class="order-name">{order.acc}</h2>
                <h2 class="order-contact">{order.email}</h2>
                <h2 class="order-contact">{order.carInfo}</h2>
                <h2 class="order-contact">{order.phone}</h2>             
                <h2 class="order-total-items">Item Count : {order.itemCount}</h2>
                <br />
                <h2 class="order-total-cost">Total Price : ${order.total}</h2>
                <br />
                <h2 class="order-contact">Pickup Option: {order.pickupOption}</h2>
                <h2 class="order-contact">Pickup Time: {order.pickupTime}</h2>


              </div>
              <div class="donut-list">
                <h3>Donut List:</h3>
                <br />
                {Object.entries(order.Donuts).map(([key, donut]) => (
                  <p key={key}>{donut.name} x {donut.quantity}</p>
                ))}
              </div>
              {
                editMode && curOrder === order.id &&(
                  <div class="edit-order-form">
                    <h2>Edit Order</h2>
                    <br />
                    {editableDonuts.map((donut) => (
                      <p key={donut.id}>{donut.name} x <input 
                      type="number" 
                      value={donut.quantity} 
                      onChange={(e) => handleDonutChange(donut.id, 'quantity', e.target.value)} 
                      min="0"
                    /><button onClick={() => handleRemoveDonut(donut.id)}>Remove</button></p>
                      
                    ))}
                    <p>
                      Pickup Option: <select placeholder="Pickup Option" value={order.pickupOption} onChange={(e) => setPickupOption(e.target.value)}>
                        <option value="In-store Pickup">In-Store Pickup</option>
                        <option value="Curbside">Curbside</option>
                      </select>
                    </p>
                    <p>
                      Pickup Time: <input type="datetime-local" value={order.pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                    </p>
                    <button onClick={handleSaveOrder}>Save</button>
                  </div>
                )
              }
              <div class="button-section">
                <div class="button-col">

                  <button class="order-buttons" onClick={() => handleApproveOrder(order.id)}><img src={ApproveArrow} alt="Approve" /></button>
                  <button class="order-buttons" onClick={() => handleRejectOrder(order.id)}><img src={RejectX} alt="Reject" /></button>

                  <button class="order-buttons" onClick={() => handleEditOrder(order)}><img src={EditIcon} alt="Edit" /></button>
                  <button class="order-buttons" onClick={() => handleCompleteOrder(order.id)}><img src={Completed} alt="Complete" /></button>
                  
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
