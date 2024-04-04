import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import necessary Firebase Auth functions
import '../../../components/Navbar.css'; // Import the CSS file for styling

const UserNav = () => {
  const navigate = useNavigate();

  const HandleLogoutClick = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("Successful logout") // Sign out the user using Firebase Auth
      navigate('/home'); // Navigate to the home page after successful logout
    } catch (error) {
      console.error('Error signing out:', error);
      
      // Handle any errors that occur during sign out
    }
  };

  const handleClick = () => {
    navigate('/about');
  };

  const handleServiceClick = () => {
    navigate('/services');
  };

  return (
    <nav className="navbar">
      <div className="logo">User Dashboard</div>
      <ul className="nav-links">
        <li><a onClick={HandleLogoutClick}>Logout</a></li>
        <li><a onClick={handleClick}>About</a></li>
        <li><a onClick={handleServiceClick}>Services</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  );
}

export default UserNav;
