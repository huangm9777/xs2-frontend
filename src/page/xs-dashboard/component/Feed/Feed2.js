import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from '../Post/Post';
import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [lastPostTime, setLastPostTime] = useState(null);
  const [newPostTime, setNewPostTime] = useState(null);
  const [total, setTotal] = useState(0);

  
  // 初始化获取帖子 
  useEffect(() => {
    fetchPosts("0", "20000000000000", "__all__");
  }, []);

  // 获取更多帖子
  const fetchPosts = async (maxBehotTime, minBehotTime, tag) => {
    try {
      // setLoading(true);
      const response = await fetch(`http://localhost:51802/media/listmore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Add any required body parameters here
          "maxBehotTime":maxBehotTime,

          "minBehotTime":minBehotTime,

          "tag": tag
        }),
      });
      const responseData = await response.json();
      // 如果获取到数据，则将数据添加到posts中，并设置lastPostTime
      if (responseData.code === 200) {
        // 如果获取到的数据为空，则设置hasMore为false
        if(responseData.data.length === 0){
          alert("没有更多数据了");
          // setError("没有更多帖子可供加载了，请稍后再试！"); 
        }
        // 如果获取到的数据不为空，则将数据添加到posts中，并设置lastPostTime
        setPosts(prevPosts => {
          const newPosts = [...prevPosts, ...responseData.data];
          // Ensure there are new posts before setting lastPostTime
          if (newPosts.length > 0) {
            const lastPost = newPosts[newPosts.length - 1];
            
            // 设置lastPostTime
            setLastPostTime(lastPost.submitedTime);
            // 设置newPostTime
            setNewPostTime(newPosts[0].submitedTime);
          }
          
          return newPosts;
        });
      } else {
        setError('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('An error occurred while fetching posts');
    } finally {
      // setLoading(false);
    }
  };

  if (error) {
    return <div className="feed-error">{error}</div>;
  }

  return (
    <div className="feed">
      <h2 className="feed-title">Latest Posts</h2>
      <p>New Post Time: {newPostTime}</p>
      <div className="feed-content">
        {posts.map((post, index) => {
          return <Post key={post.id} post={post} />;
        })}
        
      </div>
      <div className="fetch-more-posts-container">
        <button onClick={()=>fetchPosts("0", lastPostTime, "__all__")} className="fetch-more-posts-button">Fetch More Posts</button>
      </div>
    </div>
  );
}

export default Feed;