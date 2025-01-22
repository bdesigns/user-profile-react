// src/UserProfile.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  // State to manage user information
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  // Toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submission (for demonstration, we'll just log the user data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Info: ", user);
    setIsEditing(false); // Exit editing mode after submission
  };

  return (
    <div className="container mt-5">
      <div className="card text-white bg-dark">
        <div className="card-header">
          <h3>User Profile</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                disabled={!isEditing}
              ></textarea>
            </div>
            <button type="button" className="btn btn-secondary" onClick={toggleEdit}>
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && (
              <button type="submit" className="btn btn-primary ms-2">
                Save
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;