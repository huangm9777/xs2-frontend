import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">🏠</span>
              <span className="sidebar-nav-text">Home</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">🔍</span>
              <span className="sidebar-nav-text">Explore</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">✍️</span>
              <span className="sidebar-nav-text">Create Post</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">⚙️</span>
              <span className="sidebar-nav-text">Settings</span>
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;