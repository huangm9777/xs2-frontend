import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import { Routes, Route } from 'react-router-dom'

function Edit() {
    return (
      <div className="home">
        <Sidebar />
        <main className="main-content">
          <div className="feed-container">
            <header className="feed-header">
              <h1>Home</h1>
            </header>
            
          </div>
        </main>
      </div>
    );
}

export default Edit;