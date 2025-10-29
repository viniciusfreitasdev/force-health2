import React from 'react';

const FreeMonthlyPlan = () => {
  const workoutPlans = [
    {
      title: "TREINAMENTO PARA INICIANTES",
      level: "NÍVEL FÁCIL",
      description: "Para quem está iniciando ou retornando aos treinos de musculação.",
      category: "Iniciantes",
      image: "🏋️‍♂️",
      color: "#1e3a8a", // Azul
      bgColor: "#3b82f6"
    },
    {
      title: "TREINAMENTO PARA BEM ESTAR",
      level: "NÍVEL MÉDIO",
      description: "O treinamento da filosofia Wellness (bem estar), tem como objetivo o bem-estar e a saúde do corpo e da mente, treinando de forma prazerosa, sem a preocupação de ter um corpo musculoso e escultural.",
      category: "Bem Estar",
      image: "🧘‍♀️",
      color: "#eab308", // Amarelo
      bgColor: "#fbbf24"
    },
    {
      title: "TREINAMENTO PARA BOA FORMA",
      level: "NÍVEL DIFÍCIL",
      description: "O treinamento para quem busca a estética, seja aumento na massa muscular ou redução de gordura no corpo, requer maior esforço e por esse motivo os treinos são mais intensos.",
      category: "Boa Forma",
      image: "💪",
      color: "#dc2626", // Vermelho
      bgColor: "#ef4444"
    }
  ];

  return (
    <section className="free-monthly">
      <div className="container" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <h2>ESCOLHA O SEU TREINAMENTO</h2>
        <p>
          Tenha acesso a planos de treino profissionalmente desenvolvidos para todos os níveis de condicionamento físico. 
          Nossos programas mensais são criados por treinadores certificados e atualizados regularmente para mantê-lo desafiado e motivado.
        </p>
        
        <div className="workout-cards" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'stretch',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {workoutPlans.map((plan, index) => (
            <div key={index} className="workout-card" style={{ flex: '1', maxWidth: '300px' }}>
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${plan.bgColor}, ${plan.color})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: '#fff',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#fff'
                }}>
                  {/* TREINAMENTO PARA */}
                </div>
                
                <div style={{ fontSize: '4rem' }}>
                  {plan.image}
                </div>
              </div>
              <div className="workout-card-content" style={{ 
                backgroundColor: plan.color,
                color: '#fff',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#fff'
                }}>
                  {plan.title}
                </h3>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: '#fff'
                }}>
                  {plan.level}
                </div>
                <p style={{ 
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  color: '#fff'
                }}>
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeMonthlyPlan;
