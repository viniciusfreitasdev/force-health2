import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">
              FORCE HEALTH
            </div>
            <div className="logo-subtitle">
              .COM
            </div>
          </div>
          
          <nav>
            <ul className="nav">
              <li><a href="#home">HOME</a></li>
              <li><a href="#calculators">CALCULATORS</a></li>
              <li><a href="#exercises">EXERCISES LIST</a></li>
              <li><a href="#workouts">SINGLE WORKOUTS</a></li>
              <li><a href="#plans">WORKOUT PLANS</a></li>
              <li><a href="#login">LOGIN/REGISTER</a></li>
            </ul>
          </nav>
          
          <div className="social-icons">
            <a href="https://instagram.com" className="social-icon">
              <img src="/self-icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" className="social-icon">
              <img src="/self-icons/youtube.png" alt="YouTube" />
            </a>
            <a href="https://facebook.com" className="social-icon">
              <img src="/self-icons/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
