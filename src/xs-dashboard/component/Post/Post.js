import React from 'react';
import './Post.css';
import { useState, useEffect } from 'react';



function Post({ post }) {


  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  useEffect(() => {
    const renderContent = (content) => {
      try {
        const parsedContent = JSON.parse(content);
        return parsedContent.map((item, index) => {
          if (item.type === 'text') {
            setTexts(prevTexts => [...prevTexts, item.value]);
            // return <p key={index}>{item.value}</p>;
          } else if (item.type === 'image') {
            setImages(prevImages => [...prevImages, item.value]);
            // return <img key={index} src={item.value} alt="Post content" />;
          }
          
        });
        
      } catch (error) {
        console.error('Error parsing post content:', error);
        return <p>{content}</p>;
      }
      
    };
    renderContent(post.content);
    
    
  }, []);

  return (
    <div className="post">
      <h3>{post.username}</h3>
      {/* <div className="post-content">{renderContent(post.content)}</div> */}
      <div className="post-info">
        <span>Channel: {post.channelId}</span>
        <span>Labels: {post.labels}</span>
        <span>Submitted: {new Date(post.submitedTime).toLocaleString()}</span>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {images.map((image, index) => (
          <img key={index} src={image} alt="image failed to load" />
          
        ))
        }
      </div>
    </div>
  );
}

export default Post;