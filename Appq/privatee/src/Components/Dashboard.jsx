import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>
        Go back to <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Dashboard;
