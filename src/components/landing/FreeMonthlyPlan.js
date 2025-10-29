import React from 'react';

const FreeMonthlyPlan = () => {
  const workoutPlans = [
    {
      title: "6-MONTH BODYBUILDING PROGRAM",
      description: "Body transformation in 6 months",
      category: "Build Muscle",
      image: "💪"
    },
    {
      title: "3X5 FULL BODY STRENGTH TRAINING FOR BEGINNERS",
      description: "Perfect for beginners",
      category: "Build Muscle",
      image: "🏋️"
    },
    {
      title: "BODY TONING WORKOUT FOR WOMEN",
      description: "Sculpt and strengthen",
      category: "Build Muscle, Lose Fat",
      image: "👩‍💪"
    }
  ];

  return (
    <section className="free-monthly">
      <div className="container">
        <h2>FREE MONTHLY WORKOUT PLAN</h2>
        <p>
          Get access to professionally designed workout plans for all fitness levels. 
          Our monthly programs are created by certified trainers and updated regularly to keep you challenged and motivated.
        </p>
        
        <div className="workout-cards">
          {workoutPlans.map((plan, index) => (
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
                <p className="category">{plan.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeMonthlyPlan;
