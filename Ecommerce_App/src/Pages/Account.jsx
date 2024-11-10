import React, { useState, useEffect } from 'react';
import './Account.css';
import { saveUserToLocalStorage, getUserFromLocalStorage } from '../utils/localStorage';
import { Link } from 'react-router-dom';

const Account = () => {
  const initialProfile = getUserFromLocalStorage() || {
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    saveUserToLocalStorage(profile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserToLocalStorage(profile);
    setShowSuccessMessage(true);
    setIsEditMode(false);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <div className="account-container">
      <aside className="account-sidebar">
        <nav>
          <ul>
            <li><Link to="/account" className="active">My Profile</Link></li>
            <li><Link to="/address">Address Book</Link></li>
            <li><Link to="/payment">My Payment Options</Link></li>
            <li><Link to="/returns">My Returns</Link></li>
            <li><Link to="/cancellations">My Cancellations</Link></li>
            <li><Link to="/wishlist">My Wishlist</Link></li>
          </ul>
        </nav>
      </aside>

      <div className="account-content">
        <h2>{isEditMode ? 'Edit Your Profile' : 'Your Profile'}</h2>

        {showSuccessMessage && <p className="success-message">Saved Successfully!</p>}

        {isEditMode ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={profile.email} onChange={handleChange} disabled />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={profile.address} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Current Password</label>
              <input type="password" name="currentPassword" value={profile.currentPassword} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input type="password" name="newPassword" value={profile.newPassword} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" name="confirmPassword" value={profile.confirmPassword} onChange={handleChange} />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setIsEditMode(false)}>Cancel</button>
              <button type="submit" className="save-btn">Save Changes</button>
            </div>
          </form>
        ) : (
          <div className="profile-details">
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
