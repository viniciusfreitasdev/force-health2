import React from 'react';

const WeeklyWorkoutPlan = () => {
  const weeklyPlans = [
    {
      title: "TREINO COM HALTERES LIVRES",
      description: "Desenvolva força com movimentos compostos",
      level: "Iniciantes, Intermediário",
      image: "🏋️‍♂️"
    },
    {
      title: "TREINO DOS 300",
      description: "Treinamento militar de alta intensidade",
      level: "Avançado, Intermediário",
      image: "🪖"
    },
    {
      title: "TREINO DE ABDOMINAIS 5 MIN",
      description: "Rotina rápida de fortalecimento do core",
      level: "Iniciantes",
      image: "💪"
    },
    {
      title: "TREINO DE FORÇA COM PESO CORPORAL",
      description: "Sem necessidade de equipamentos",
      level: "Intermediário",
      image: "🤸"
    }
  ];

  return (
    <section className="weekly-workout">
      <div className="container" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <h2>PLANO DE TREINO SEMANAL</h2>
        <p>
          Descubra planos de fitness abrangentes desenvolvidos por treinadores profissionais. 
          Cada programa semanal é cuidadosamente estruturado para maximizar resultados enquanto se adapta à sua agenda ocupada.
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
