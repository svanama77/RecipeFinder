import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Recipe App</h1>
      <p className="landing-description">Discover delicious recipes and get inspired!</p>
      <div className="landing-links">
        <Link to="/login" className="landing-link">Login</Link>
        <Link to="/signup" className="landing-link">Signup</Link>
      </div>
    </div>
  );
};

export default Landing;
