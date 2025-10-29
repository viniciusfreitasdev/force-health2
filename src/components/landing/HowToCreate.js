import React from 'react';

const HowToCreate = () => {
  return (
    <section className="how-to-create">
      <div className="container">
        <h2>HOW TO CREATE A PERSONALIZED WORKOUT PLAN</h2>
        <div className="how-to-create-content">
          <p>
            Creating the perfect workout plan starts with understanding your goals and current fitness level. 
            Our intelligent system considers your preferences, available equipment, and time constraints to design 
            a program that works specifically for you.
          </p>
          
          <ul className="goals-list">
            <li>Do you want to build muscle?</li>
            <li>Are you looking to lose weight?</li>
            <li>Do you want to become stronger?</li>
            <li>Do you desire to increase your endurance?</li>
            <li>Do you want to focus on a specific body part or muscle group?</li>
          </ul>
          
          <p>
            Whatever your fitness goals may be, having a structured plan is essential for success. 
            Our workout planner helps you create a personalized program that adapts to your progress and keeps you motivated.
          </p>
          
          <div className="workout-types">
            <div className="workout-type">
              <div className="workout-type-icon">💪</div>
              <h3>BODY</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">🏃</div>
              <h3>FITNESS</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">🚴</div>
              <h3>CARDIO</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">🧘</div>
              <h3>PILATES</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToCreate;
