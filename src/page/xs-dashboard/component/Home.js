import React, { useRef } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import './Home.css';




function Home() {
  
  return (
    <div className="home">
      {/* <Sidebar /> */}
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