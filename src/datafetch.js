import React, { useEffect, useState } from 'react';
import './datacss.css'; // Import the CSS file

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="users-container"> {/* Apply the container class */}
      <h1>Users List</h1>
      <ul className="users-list"> {/* Apply the list class */}
        {users.map(user => (
          <li className="user-card" key={user.id}> {/* Apply the card class */}
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
