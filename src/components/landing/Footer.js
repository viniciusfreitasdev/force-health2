import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WORKOUT PLANNER APP</h3>
            <p>
              The ultimate fitness companion that helps you create, track, and achieve your fitness goals. 
              Whether you're a beginner or an experienced athlete, our app adapts to your needs.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>ABOUT US</h3>
            <p>
              We're passionate about making fitness accessible to everyone. Our mission is to provide 
              tools and resources that empower people to take control of their health and fitness journey.
            </p>
            <p>Contact us: mail@forcehealth.com</p>
            <p>Find us on the map</p>
          </div>
          
          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <a href="#blog">Blog</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#disclaimer">Disclaimer</a>
            <a href="#terms">Terms and Conditions</a>
            <a href="#calculator">Daily Calorie Calculator</a>
            <a href="#ppl">PPL Workout</a>
            <a href="#exercises">List of Exercises</a>
            <a href="#calisthenics">Calisthenics Exercises</a>
            <a href="#compound">Compound Exercises</a>
          </div>
          
          <div className="footer-section">
            <h3>CONTACTS</h3>
            <p>Email: mail@forcehealth.com</p>
            <p>Find us on the map</p>
            <p>All materials are copyrighted © 2025</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Force Health © 2025 - All Rights Reserved - Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
