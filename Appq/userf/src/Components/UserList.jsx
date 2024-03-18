// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './UserList.css'; // Import the CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length > 0 ? (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
