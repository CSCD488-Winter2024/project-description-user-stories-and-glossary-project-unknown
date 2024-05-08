import React from 'react';
import '../styles/AdminEdit.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';

function AdminEdit() {
  return (
    <div className="AdminEdit">
      <AdminNav />
      <div id="AdminEdit">
        <h3>Donut Table</h3>
        
        <table class="donut-table">
          <tr>
            <td class="content-td">Donut Name</td>
            <td class="content-td">Donut Price</td>
            <td class="content-td">Img Link</td>
            <td class="edit-button-container"><button class="edit-button">Edit</button></td>
          </tr>
          <tr>
            <td class="content-td">Donut Name</td>
            <td class="content-td">Donut Price</td>
            <td class="content-td">Img Link</td>
            <td class="edit-button-container"><button class="edit-button">Edit</button></td>
          </tr>
          <tr>
            <td class="content-td">Donut Name</td>
            <td class="content-td">Donut Price</td>
            <td class="content-td">Img Link</td>
            <td class="edit-button-container"><button class="edit-button">Edit</button></td>
          </tr>
        </table>
        <h3>Admin Users</h3>
        <table class="accounts-table">
          <tr>
            <td class="content-td">Owner</td>
            <td class="content-td">Permission to edit?</td>
            <td class="edit-button-container"><button class="edit-button">Edit</button></td>
          </tr>
          <tr>
            <td class="content-td">Employee</td>
            <td class="content-td">Permission to edit?</td>
     
            <td class="edit-button-container"><button class="edit-button">Edit</button></td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default AdminEdit;
