import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";

const ProfileDropdown = ({ handleLogout }) => {
  return (
    <div className="profile-dropdown">
      <ul>
        <li>
          <Link to="/account">
            <FaUser /> Manage My Account
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FaBox /> My Order
          </Link>
        </li>
        <li>
          <Link to="/cancellations">
            <FaTimesCircle /> My Cancellations
          </Link>
        </li>
        <li>
          <Link to="/reviews">
            <FaStar /> My Reviews
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
