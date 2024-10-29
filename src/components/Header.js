import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Brand text */}
        <Link to="/" className="navbar-brand brand-text">
          Avitek
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logout}>Logout</button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/login" className="btn btn-primary login-btn">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
