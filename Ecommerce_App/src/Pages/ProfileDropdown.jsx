import { Link } from "react-router-dom";
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ handleLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('wishlist');
    localStorage.removeItem('cart');
    handleLogout(); 
    navigate("/login"); 
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
