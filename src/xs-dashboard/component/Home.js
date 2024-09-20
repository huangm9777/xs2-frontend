import React, { useRef } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Home.css';
import Edit from './Edit/Edit';



function Home() {
  const inputRef = useRef(null);
  const handleSearch = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div className="home">
      <Sidebar />
      <main className="main-content">
        <div className="feed-container">
          <header className="feed-header">
            <h1>Home</h1>
          </header>
          <div className="feed"><Feed /></div>
        </div>
      </main>
    </div>
  );
}

export default Home;