// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <div className="address">
        <strong>Address:</strong>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <div className="company">
        <strong>Company:</strong>
        <p>
          {user.company.name} - {user.company.catchPhrase}
        </p>
        <p>
          <em>{user.company.bs}</em>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
