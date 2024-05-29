import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import '../styles/AdminEdit.css';
import '../index.css';
import AdminNav from '../components/AdminHeader';

function AdminEdit() {
  const [donuts, setDonuts] = useState([]);
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentDonutId, setCurrentDonutId] = useState(null);
  const [currentDonut, setCurrentDonut] = useState({
    name: '',
    desc: '',
    price: '',
    image: '',
    stock: ''
  });

  useEffect(() => {
    const db = getDatabase();

    // Fetch donuts data
    const donutsRef = ref(db, 'Donuts');
    onValue(donutsRef, (snapshot) => {
      const data = snapshot.val();
      const donutList = data ? Object.entries(data).map(([id, details]) => ({ id, ...details })) : [];
      setDonuts(donutList);
    });

    // Fetch users data
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userList = data ? Object.entries(data).map(([id, details]) => ({ id, ...details })) : [];
      setUsers(userList);
    });
  }, []);

  const handleEditClick = (donut) => {
    setEditMode(true);
    setCurrentDonutId(donut.id);
    setCurrentDonut(donut);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentDonut((prevDonut) => ({
      ...prevDonut,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const donutRef = ref(db, `Donuts/${currentDonutId}`);
    update(donutRef, {
      name: currentDonut.name,
      desc: currentDonut.desc,
      price: currentDonut.price,
      image: currentDonut.image,
      stock: currentDonut.stock
    }).then(() => {
      setEditMode(false);
      setCurrentDonutId(null);
      setCurrentDonut({
        name: '',
        desc: '',
        price: '',
        image: '',
        stock: ''
      });
    }).catch((error) => {
      console.error('Error updating donut:', error);
    });
  };

  return (
    <div className="AdminEdit">

      <AdminNav />
      
      <div id="AdminEdit">

        <h3 id='title'>Donut Table</h3>
        
        <table className="donut-table">
          <thead>
            <tr>
              <th className="content-td">Donut Name</th>
              <th className="content-td">Description</th>
              <th className="content-td">Donut Price</th>
              <th className="content-td">Image</th>
              <th className="content-td">Stock</th>
              <th className="edit-button-container content-td">Edit</th>
            </tr>
          </thead>
          <tbody>
            {donuts.map((donut) => (
              <React.Fragment key={donut.id}>
                <tr>
                  <td className="content-td">{donut.name}</td>
                  <td className="content-td">{donut.desc}</td>
                  <td className="content-td">{donut.price}</td>
                  <td className="content-td">
                    <img src={donut.image} alt={donut.name} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td className="content-td">{donut.stock}</td>
                  <td className="edit-button-container content-td">
                    <button className="edit-button content-td" onClick={() => handleEditClick(donut)}>Edit</button>
                  </td>
                </tr>
                {editMode && currentDonutId === donut.id && (
                  <tr>
                    <td colSpan="6">
                      <div className="edit-form">
                        <h3>Edit Donut</h3>
                        <form onSubmit={handleFormSubmit}>
                          <label>
                            Donut Name:
                            <input type="text" name="name" value={currentDonut.name} onChange={handleInputChange} required />
                          </label>
                          <label>
                            Description:
                            <input type="text" name="desc" value={currentDonut.desc} onChange={handleInputChange} required />
                          </label>
                          <label>
                            Price:
                            <input type="number" name="price" value={currentDonut.price} onChange={handleInputChange} required />
                          </label>
                          <label>
                            Stock:
                            <input type="number" name="stock" value={currentDonut.stock} onChange={handleInputChange} required />
                          </label>
                          <button type="submit">Save</button>
                        </form>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <h3>Admin Users</h3>
        <table className="accounts-table">
          <thead>
            <tr>
              <th className="content-td">User Name</th>
              <th className="content-td">Role</th>
              <th className="edit-button-container content-td">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="content-td">{user.name}</td>
                <td className="content-td">{user.role}</td>
                <td className="edit-button-container content-td">
                  <button className="edit-button content-td">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminEdit;
