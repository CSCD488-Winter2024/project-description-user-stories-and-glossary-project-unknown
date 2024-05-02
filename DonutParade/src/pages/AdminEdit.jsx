import React from 'react';
import '../styles/AdminEdit.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';

function AdminEdit() {
  return (
    <div className="AdminEdit">
      <AdminNav />
      <div id="AdminEdit">
        <table>
        <tr>
          <td>Donut Name</td>
          <td>Donut Price</td>
          <td>Img Link</td>
          <td class="edit-button-container"><button class="edit-button">Edit</button></td>
        </tr>
        <tr>
          <td>Donut Name</td>
          <td>Donut Price</td>
          <td>Img Link</td>
          <td class="edit-button-container"><button class="edit-button">Edit</button></td>
        </tr>
        <tr>
          <td>Donut Name</td>
          <td>Donut Price</td>
          <td>Img Link</td>
          <td class="edit-button-container"><button class="edit-button">Edit</button></td>
        </tr>
      </table>
      </div>
      
      </div>
  );
}

export default AdminEdit;
