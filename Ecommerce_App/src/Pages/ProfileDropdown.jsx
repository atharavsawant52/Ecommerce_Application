import { Link } from "react-router-dom";
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import { clearUserFromLocalStorage } from "../utils/localStorage"; // Import clear function
import { useNavigate } from "react-router-dom"; // For navigation

const ProfileDropdown = ({ handleLogout }) => {
  const navigate = useNavigate();

  // Update the logout function to clear user and navigate to login page
  const logout = () => {
    clearUserFromLocalStorage(); // Clear user data from localStorage
    handleLogout(); // Call the passed prop function if you need to update parent state
    navigate("/login"); // Redirect to login page
  };

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
            <FaBox /> My Orders
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
          <button onClick={logout}>
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
