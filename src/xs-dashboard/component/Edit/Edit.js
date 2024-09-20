import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Edit.css'

function Edit() {
    return (
      <div className="home">
        <Sidebar />
        <main className="main-content">
            <header className="edit-header">
              <h1>Edit</h1>
            </header>
          <div className="edit-container">
            <div className="edit-content">  
              <h2>What's on your mind?</h2>
              <textarea className="edit-textarea" placeholder="Whats happening?" rows="5" cols="40" />
              <br></br><div className="icon-list">
                <span className="icon">📷</span> {/* Image Icon */}
                <span className="icon">😊</span> {/* Emoji Icon */}
                <span className="icon">📍</span> {/* Location Icon */}
              </div>
              <button className="edit-button">Save</button>
              <button className="edit-button">Post</button>
            </div>
            <div className="draft-content">
              <h2>Draft</h2>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Edit;