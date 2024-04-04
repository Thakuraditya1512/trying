// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleClick = () =>{
    navigate('/about')
    
    }
      
    const handleServiceClick = () =>{
        navigate('/services')
        
        }
        const HandleLoginClick = () =>{
            navigate('/login')
            
            }
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a   onClick={HandleLoginClick}>Login</a></li>
        <li><a onClick={handleClick}>About</a></li>
        <li><a onClick={handleServiceClick}>Services</a></li>
        <li><a >Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
