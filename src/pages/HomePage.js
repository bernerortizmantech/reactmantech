import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './HomePage.css';

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner" title="Hero banner for MedRed" role="img" aria-label="A smiling woman working in a call center with a friendly and professional atmosphere.">
        <div className="overlay">
          <div className="container text-left text-white">
            <h1>Care When You Need It</h1>
            <p>Your one-stop solution for everything!</p>
            {!isLoggedIn && (
            <div className="hero-buttons">
              <Link to="/login" className="btn btn-primary me-2">Login</Link>
              <Link to="/register2" className="btn btn-secondary">Register Now</Link>
            </div>
          )}

          </div>
        </div>
      </div>

      {/* Section Below Banner */}
      <div className="container my-5">
        <div className="row">
          {/* Left Column: Title and Text */}
          <div className="main-text col-md-7">
		        <p className="small-text">About MedRed</p>
            <h2>World-Class and Compassionate Healthcare</h2>
            <p>MedRec is a comprehensive media record management system designed to provide easy and secure access to patien information. Our system allows healthcare providers to efficiently manage patient records, prescriptions, and visit summaries.</p>
            <Link to="/learn-more" className="text-primary">Learn more</Link>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="img-placeholder" title="Image for MedRed" role="img" aria-label="Businesswoman with glasses smiling, holding a coffee, and looking at her phone while standing in the street."></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
