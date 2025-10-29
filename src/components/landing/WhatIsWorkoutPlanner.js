import React from 'react';

const WhatIsWorkoutPlanner = () => {
  return (
    <section className="what-is">
      <div className="container">
        <h2>WHAT IS WORKOUT PLANNER?</h2>
        <div className="what-is-content">
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon-small">💪</div>
              <div className="feature-text">
                <h3>LEARN HOW TO DO THE EXERCISES</h3>
                <p>Access our comprehensive exercise library with detailed instructions, proper form demonstrations, and safety tips for every movement.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">🏋️</div>
              <div className="feature-text">
                <h3>CREATE A FREE PERSONALIZED WORKOUT</h3>
                <p>Build your custom workout plan tailored to your fitness level, goals, and available equipment. No more guessing what to do next.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">🎓</div>
              <div className="feature-text">
                <h3>CREATE CUSTOM WORKOUTS FOR YOUR STUDENTS</h3>
                <p>If you're a trainer, design professional workout plans for your clients with detailed progress tracking and modifications.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-small">🧮</div>
              <div className="feature-text">
                <h3>FITNESS CALCULATORS</h3>
                <p>Track your calories, calculate your one-rep max, monitor body composition, and get accurate fitness metrics.</p>
              </div>
            </div>
          </div>
          
          <div className="what-is-image">
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              color: '#fff',
              position: 'relative'
            }}>
              💪👩‍💪
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWorkoutPlanner;
