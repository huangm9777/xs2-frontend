import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'; // Add this import
import{HomeOutlined,SearchOutlined,EditOutlined,UserOutlined,SettingOutlined } from '@ant-design/icons';

function Sidebar() {

  const items = [
    {
      label:'Home',
      key: '/',
      icon: <HomeOutlined />,
    },{
      label:'Explore',
      key: '/explore',
      icon: <SearchOutlined />,
    },{
      label:'Create',
      key: '/edit',
      icon: <EditOutlined />,
    },{
      label:'Setting',
      key: '/setting',
      icon: <SettingOutlined />,
    },{
      label:'User Profile',
      key: '/user_profile',
      icon: <UserOutlined />,
    },

  ]


  
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-nav">

          
          <li className="sidebar-nav-item">
            <Link to="/home" className="sidebar-nav-link">
              <span className="sidebar-nav-icon"><HomeOutlined /></span>
              <span className="sidebar-nav-text">Home</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link" >
              <span className="sidebar-nav-icon"><SearchOutlined /></span>
              <span className="sidebar-nav-text">Explore</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <Link to="/edit" className="sidebar-nav-link">
              <span className="sidebar-nav-icon"><EditOutlined /></span> 
              <span className="sidebar-nav-text">Create</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link" >
              <span className="sidebar-nav-icon"><SettingOutlined /></span>
              <span className="sidebar-nav-text">Settings</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link" >
              <span className="sidebar-nav-icon"><UserOutlined /></span>
              <span className="sidebar-nav-text">User Profile</span>
            </a>
          </li>
          
        </ul>


      </nav>
    </div>
  );
}

export default Sidebar;