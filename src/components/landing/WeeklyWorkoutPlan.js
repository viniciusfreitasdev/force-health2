import React from 'react';

const WeeklyWorkoutPlan = () => {
  const weeklyPlans = [
    {
      title: "BARBELL FREE WEIGHTS WORKOUT",
      description: "Build strength with compound movements",
      level: "Beginners, Intermediate",
      image: "🏋️‍♂️"
    },
    {
      title: "THE 300 WORKOUT",
      description: "High-intensity military-style training",
      level: "Advanced, Intermediate",
      image: "🪖"
    },
    {
      title: "5 MIN TOTAL ABS WORKOUT",
      description: "Quick core strengthening routine",
      level: "Beginners",
      image: "💪"
    },
    {
      title: "BODYWEIGHT STRENGTH WORKOUT",
      description: "No equipment needed",
      level: "Intermediate",
      image: "🤸"
    }
  ];

  return (
    <section className="weekly-workout">
      <div className="container">
        <h2>WEEKLY WORKOUT PLAN</h2>
        <p>
          Discover comprehensive fitness plans designed by professional trainers. 
          Each weekly program is carefully structured to maximize results while fitting into your busy schedule.
        </p>
        
        <div className="workout-cards">
          {weeklyPlans.map((plan, index) => (
            <div key={index} className="workout-card">
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: '#fff'
              }}>
                {plan.image}
              </div>
              <div className="workout-card-content">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <p className="category">{plan.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyWorkoutPlan;
