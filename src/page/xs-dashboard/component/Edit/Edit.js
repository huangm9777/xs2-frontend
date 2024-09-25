import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Edit.css'
import ImagesHolder from './ImagesHolder'
import {PictureOutlined,SmileOutlined, EnvironmentOutlined} from '@ant-design/icons'
import { Button, Flex, Tooltip } from 'antd';
import { getUserInfoAPI } from '@/api/user'

function Edit() {
  const textareaRef = useRef(null);
  
  const [image, setImage] = useState([]);
  const [draft, setDraft] = useState({
    text: '',
    image: '',
    location: '',
    date: '',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await getUserInfoAPI();
      
      // console.log(userInfo);
    };
    fetchData();
  },[])

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
        {/* <Sidebar /> */}
        <main className="main-content">
            <header className="edit-header">
              <h1>Hi {}</h1>
            </header>
          <div className="edit-container">
            <div className="edit-content">  
              <h2>What's on your mind?</h2>
              <textarea ref={textareaRef} className="edit-textarea" placeholder="Whats happening?" rows="3" cols="40" />
              {image.length > 0 && <ImagesHolder />}
              <br></br><div className="icon-list">
                <Tooltip title="Attach Image">
                <span className="icon" ><PictureOutlined /></span> {/* Image Icon */}
                </Tooltip>
                <Tooltip title="Add Emoji">
                <span className="icon"><SmileOutlined /></span> {/* Emoji Icon */}
                </Tooltip>
                <Tooltip title="Attach Location">
                <span className="icon"><EnvironmentOutlined /></span> {/* Location Icon */}
                </Tooltip>
              </div>
              <Button>Save</Button>
              <Button>Post</Button>
              {/* <button className="edit-button" onClick={handleSave}>Save</button>
              <button className="edit-button" onClick={handlePost}>Post</button> */}
            </div>
            <br></br>
            
          </div>
        </main>
      </div>
    );
}

export default Edit;