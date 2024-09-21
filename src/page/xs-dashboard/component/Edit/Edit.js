import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Edit.css'
import ImagesHolder from './ImagesHolder'

function Edit() {
  const textareaRef = useRef(null);
  
  const [image, setImage] = useState([]);
  const [draft, setDraft] = useState({
    text: '',
    image: '',
    location: '',
    date: '',
  });

  const handleSave = () => {
    const text = textareaRef.current.value;
    setDraft({ ...draft, text });
  };

  const handlePost = () => {
    const text = textareaRef.current.value;
    setDraft({ ...draft, text });
  };

  return (
      <div className="home">
        <Sidebar />
        <main className="main-content">
            <header className="edit-header">
              <h1>Create</h1>
            </header>
          <div className="edit-container">
            <div className="edit-content">  
              <h2>What's on your mind?</h2>
              <textarea ref={textareaRef} className="edit-textarea" placeholder="Whats happening?" rows="3" cols="40" />
              {image.length > 0 && <ImagesHolder />}
              <br></br><div className="icon-list">
                <span className="icon">📷</span> {/* Image Icon */}
                <span className="icon">😊</span> {/* Emoji Icon */}
                <span className="icon">📍</span> {/* Location Icon */}
              </div>
              <button className="edit-button" onClick={handleSave}>Save</button>
              <button className="edit-button" onClick={handlePost}>Post</button>
            </div>
            <br></br>
            <div className="draft-content">
              <h2>Draft</h2>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Edit;