import React, { useState } from 'react';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
          <h2>Sidebar</h2>
        </div>
        <div className="sidebar-content">
          {/* Sidebar content goes here */}
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;
