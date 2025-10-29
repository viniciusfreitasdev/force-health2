import React, { useState } from 'react';

const WorkoutPlans = () => {
  const [plans] = useState([
    {
      id: 1,
      name: 'Musculação Intensiva',
      description: 'Plano focado em ganho de massa muscular',
      duration: '12 semanas',
      difficulty: 'Avançado',
      exercises: 45,
      status: 'Ativo'
    },
    {
      id: 2,
      name: 'Cardio para Iniciantes',
      description: 'Programa de cardio para quem está começando',
      duration: '8 semanas',
      difficulty: 'Iniciante',
      exercises: 20,
      status: 'Ativo'
    },
    {
      id: 3,
      name: 'HIIT Avançado',
      description: 'Treino intervalado de alta intensidade',
      duration: '6 semanas',
      difficulty: 'Avançado',
      exercises: 30,
      status: 'Em Revisão'
    },
    {
      id: 4,
      name: 'Yoga e Flexibilidade',
      description: 'Foco em flexibilidade e relaxamento',
      duration: '10 semanas',
      difficulty: 'Intermediário',
      exercises: 25,
      status: 'Ativo'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredPlans = plans.filter(plan => {
    if (filter === 'all') return true;
    return plan.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="workout-plans">
      <div className="workout-plans-header">
        <h1>Gerenciamento de Planos de Treino</h1>
        <button className="create-btn">+ Criar Novo Plano</button>
      </div>

      <div className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button 
          className={`filter-btn ${filter === 'ativo' ? 'active' : ''}`}
          onClick={() => setFilter('ativo')}
        >
          Ativos
        </button>
        <button 
          className={`filter-btn ${filter === 'em revisão' ? 'active' : ''}`}
          onClick={() => setFilter('em revisão')}
        >
          Em Revisão
        </button>
      </div>

      <div className="plans-grid">
        {filteredPlans.map(plan => (
          <div key={plan.id} className="plan-card">
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <span className={`status ${plan.status.toLowerCase().replace(' ', '-')}`}>
                {plan.status}
              </span>
            </div>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-details">
              <div className="detail">
                <span className="label">Duração:</span>
                <span className="value">{plan.duration}</span>
              </div>
              <div className="detail">
                <span className="label">Dificuldade:</span>
                <span className={`difficulty ${plan.difficulty.toLowerCase()}`}>
                  {plan.difficulty}
                </span>
              </div>
              <div className="detail">
                <span className="label">Exercícios:</span>
                <span className="value">{plan.exercises}</span>
              </div>
            </div>
            <div className="plan-actions">
              <button className="action-btn edit">Editar</button>
              <button className="action-btn view">Visualizar</button>
              <button className="action-btn duplicate">Duplicar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
