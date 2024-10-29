import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // Access the login function from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic
    if (username === 'user' && password === 'password') {
      login(); // Update the global state to mark user as logged in
      navigate('/');  // Redirect to home on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
