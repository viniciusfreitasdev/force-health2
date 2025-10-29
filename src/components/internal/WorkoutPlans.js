import React, { useState } from 'react';

const WorkoutPlans = () => {
  const [plans] = useState([
    {
      id: 1,
      name: 'INICIANTES',
      type: 'INICIANTES',
      description: 'Para quem está iniciando ou retornando aos treinos de musculação.',
      difficulty: 'Fácil',
      level: 'NÍVEL FÁCIL',
      color: 'blue'
    },
    {
      id: 2,
      name: 'BEM ESTAR',
      type: 'BEM ESTAR',
      description: 'O treinamento da filosofia Wellness (bem estar), tem como objetivo o bem-estar e a saúde do corpo e da mente, treinando de forma prazerosa, sem a preocupação de ter um corpo musculoso e escultural.',
      difficulty: 'Médio',
      level: 'NÍVEL MÉDIO',
      color: 'yellow'
    },
    {
      id: 3,
      name: 'BOA FORMA',
      type: 'BOA FORMA',
      description: 'O treinamento para quem busca a estética, seja aumento na massa muscular ou redução de gordura no corpo, requer maior esforço e por esse motivo os treinos são mais intensos.',
      difficulty: 'Difícil',
      level: 'NÍVEL DIFÍCIL',
      color: 'red'
    },
  ]);

  const handleEdit = (plan) => {
    // TODO: Implementar lógica de edição
    console.log('Editar plano:', plan);
  };

  const handleView = (plan) => {
    // TODO: Implementar lógica de visualização
    console.log('Visualizar plano:', plan);
  };

  return (
    <div className="workout-plans">

      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className={`plan-card plan-card-${plan.color}`}>
            <div className="plan-header plan-header-top">
              <span className="plan-label">TREINAMENTO PARA</span>
              <h3>{plan.type}</h3>
            </div>
            <div className={`plan-level plan-level-${plan.color}`}>
              {plan.level}
            </div>
            <div className={`plan-description plan-description-${plan.color}`}>
              <p>{plan.description}</p>
            </div>
            <div className="plan-actions">
              <button 
                className="action-btn edit" 
                onClick={() => handleEdit(plan)}
              >
                Gerenciar
              </button>
              <button 
                className="action-btn view"
                onClick={() => handleView(plan)}
              >
                Visualizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
