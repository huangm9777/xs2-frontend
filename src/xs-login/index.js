import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Assuming you'll create a separate CSS file







const XSLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:51802/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        handleSuccessfulLogin(data);
      } else {
        console.error('Login failed:', response.statusText);
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network errors
    }
  };

  const handleSuccessfulLogin = (response) => {
    if (response.code === 200 && response.data && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Navigate to the dashboard
      // navigate('/dashboard');
      navigate('/home');

    } else {
      console.error('Login successful, but token not found in response');
    }
  };

  return (
    <div className="xs-login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default XSLogin;
