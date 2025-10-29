import React, { useState, useEffect } from 'react';

const WorkoutPlans = () => {
  // Grupos musculares disponíveis (mesmos do ExerciseManagement)
  const muscleGroups = [
    'Peitoral',
    'Costas',
    'Ombros',
    'Bíceps',
    'Tríceps',
    'Pernas',
    'Glúteos',
    'Abdômen',
    'Cardio'
  ];

  // Carregar planos do localStorage ou usar dados padrão
  const getInitialPlans = () => {
    const saved = localStorage.getItem('workoutPlans');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: 1,
        name: 'INICIANTES',
        type: 'INICIANTES',
        description: 'Para quem está iniciando ou retornando aos treinos de musculação.',
        difficulty: 'Fácil',
        level: 'NÍVEL FÁCIL',
        color: 'blue',
        exercises: [] // Array de exercícios vinculados ao plano
      },
      {
        id: 2,
        name: 'BEM ESTAR',
        type: 'BEM ESTAR',
        description: 'O treinamento da filosofia Wellness (bem estar), tem como objetivo o bem-estar e a saúde do corpo e da mente, treinando de forma prazerosa, sem a preocupação de ter um corpo musculoso e escultural.',
        difficulty: 'Médio',
        level: 'NÍVEL MÉDIO',
        color: 'yellow',
        exercises: []
      },
      {
        id: 3,
        name: 'BOA FORMA',
        type: 'BOA FORMA',
        description: 'O treinamento para quem busca a estética, seja aumento na massa muscular ou redução de gordura no corpo, requer maior esforço e por esse motivo os treinos são mais intensos.',
        difficulty: 'Difícil',
        level: 'NÍVEL DIFÍCIL',
        color: 'red',
        exercises: []
      },
    ];
  };

  const [plans, setPlans] = useState(getInitialPlans);
  const [showManageModal, setShowManageModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [availableExercises, setAvailableExercises] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [exerciseInputs, setExerciseInputs] = useState({}); // { exerciseId: { series: '', repetitions: '' } }

  // Carregar exercícios do localStorage
  const loadExercises = () => {
    const saved = localStorage.getItem('exercises');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  };

  // Atualizar exercícios disponíveis quando o componente montar ou quando houver mudanças
  useEffect(() => {
    const load = () => {
      setAvailableExercises(loadExercises());
    };
    load();
    
    const interval = setInterval(() => {
      load();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Salvar planos no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('workoutPlans', JSON.stringify(plans));
  }, [plans]);

  const handleEdit = (plan) => {
    // Garantir que o plano tenha a propriedade exercises
    const planWithExercises = {
      ...plan,
      exercises: plan.exercises || []
    };
    setCurrentPlan(planWithExercises);
    setShowManageModal(true);
  };

  const handleView = (plan) => {
    // Buscar o plano mais atualizado da lista
    const updatedPlan = plans.find(p => p.id === plan.id) || plan;
    // Garantir que o plano tenha a propriedade exercises
    const planWithExercises = {
      ...updatedPlan,
      exercises: updatedPlan.exercises || []
    };
    setCurrentPlan(planWithExercises);
    setShowViewModal(true);
  };

  const handleCloseManageModal = () => {
    setShowManageModal(false);
    setCurrentPlan(null);
    setSelectedMuscleGroup('');
    setExerciseInputs({});
  };

  const handleExerciseInputChange = (exerciseId, field, value) => {
    setExerciseInputs(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        [field]: value
      }
    }));
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setCurrentPlan(null);
  };

  

  const updatePlanAndState = (updatedPlan) => {
    setPlans(prevPlans => {
      const newPlans = prevPlans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
      return newPlans;
    });
    setCurrentPlan(updatedPlan);
  };

  const handleAddExerciseToPlan = (exercise, series, repetitions) => {
    if (!currentPlan) return;
    if (!series || !repetitions) {
      alert('Por favor, informe séries e repetições');
      return;
    }

    const exerciseInPlan = {
      exerciseId: exercise.id,
      exerciseName: exercise.name,
      exerciseDescription: exercise.description,
      muscleGroup: exercise.muscleGroup,
      equipmentName: exercise.equipmentName || '-',
      series: parseInt(series),
      repetitions: parseInt(repetitions)
    };

    const updatedPlan = {
      ...currentPlan,
      exercises: [...(currentPlan.exercises || []), exerciseInPlan]
    };

    updatePlanAndState(updatedPlan);
  };

  const handleRemoveExerciseFromPlan = (exerciseId) => {
    if (!currentPlan) return;

    const updatedPlan = {
      ...currentPlan,
      exercises: (currentPlan.exercises || []).filter(ex => ex.exerciseId !== exerciseId)
    };

    updatePlanAndState(updatedPlan);
  };

  const handleUpdateExerciseSeries = (exerciseId, series) => {
    if (!currentPlan) return;

    const updatedPlan = {
      ...currentPlan,
      exercises: (currentPlan.exercises || []).map(ex =>
        ex.exerciseId === exerciseId
          ? { ...ex, series: parseInt(series) }
          : ex
      )
    };

    updatePlanAndState(updatedPlan);
  };

  const handleUpdateExerciseRepetitions = (exerciseId, repetitions) => {
    if (!currentPlan) return;

    const updatedPlan = {
      ...currentPlan,
      exercises: (currentPlan.exercises || []).map(ex =>
        ex.exerciseId === exerciseId
          ? { ...ex, repetitions: parseInt(repetitions) }
          : ex
      )
    };

    updatePlanAndState(updatedPlan);
  };

  // Filtrar exercícios por grupo muscular
  const filteredExercises = selectedMuscleGroup
    ? availableExercises.filter(ex => ex.muscleGroup === selectedMuscleGroup)
    : availableExercises;

  // Agrupar exercícios do plano por grupo muscular
  const groupExercisesByMuscleGroup = (exercises) => {
    const grouped = {};
    exercises.forEach(ex => {
      if (!grouped[ex.muscleGroup]) {
        grouped[ex.muscleGroup] = [];
      }
      grouped[ex.muscleGroup].push(ex);
    });
    return grouped;
  };

  // Verificar se um exercício já está no plano
  const isExerciseInPlan = (exerciseId) => {
    if (!currentPlan) return false;
    return currentPlan.exercises.some(ex => ex.exerciseId === exerciseId);
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
            <div className="plan-stats" style={{ padding: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
              <strong>Exercícios: {plan.exercises ? plan.exercises.length : 0}</strong>
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

      {/* Modal de Gerenciar Plano */}
      {showManageModal && currentPlan && (
        <div className="form-modal" onClick={handleCloseManageModal}>
          <div className="form-content" style={{ maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
            <h2>Gerenciar Plano: {currentPlan.type}</h2>
            
            

            {/* Seção de adicionar exercícios */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>Adicionar Exercícios ao Plano</h3>
              
              <div className="form-group">
                <label htmlFor="muscleGroupFilter">Filtrar por Grupo Muscular</label>
                <select
                  id="muscleGroupFilter"
                  value={selectedMuscleGroup}
                  onChange={(e) => setSelectedMuscleGroup(e.target.value)}
                >
                  <option value="">Todos os grupos</option>
                  {muscleGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '5px', padding: '1rem' }}>
                {filteredExercises.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
                    Nenhum exercício disponível. Cadastre exercícios na tela de Gerenciamento de Exercícios.
                  </p>
                ) : (
                  filteredExercises.map(exercise => {
                    const inPlan = isExerciseInPlan(exercise.id);
                    const inputs = exerciseInputs[exercise.id] || { series: '', repetitions: '' };
                    const series = inputs.series;
                    const repetitions = inputs.repetitions;

                    return (
                      <div
                        key={exercise.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1rem',
                          marginBottom: '0.5rem',
                          border: '1px solid #e0e0e0',
                          borderRadius: '5px',
                          backgroundColor: inPlan ? '#e8f5e9' : '#f9f9f9'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <strong>{exercise.name}</strong>
                          <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>
                            <span className="muscle-group">{exercise.muscleGroup}</span> • {exercise.equipmentName || '-'}
                          </div>
                          {exercise.description && (
                            <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.25rem' }}>
                              {exercise.description}
                            </div>
                          )}
                        </div>
                        {inPlan ? (
                          <span style={{ color: '#28a745', fontWeight: 'bold', marginRight: '1rem' }}>
                            ✓ Adicionado
                          </span>
                        ) : (
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <input
                              type="number"
                              placeholder="Séries"
                              min="1"
                              value={series}
                              onChange={(e) => handleExerciseInputChange(exercise.id, 'series', e.target.value)}
                              style={{ width: '70px', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '3px' }}
                            />
                            <input
                              type="number"
                              placeholder="Reps"
                              min="1"
                              value={repetitions}
                              onChange={(e) => handleExerciseInputChange(exercise.id, 'repetitions', e.target.value)}
                              style={{ width: '70px', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '3px' }}
                            />
                            <button
                              type="button"
                              className="action-btn"
                              onClick={() => {
                                handleAddExerciseToPlan(exercise, series, repetitions);
                                handleExerciseInputChange(exercise.id, 'series', '');
                                handleExerciseInputChange(exercise.id, 'repetitions', '');
                              }}
                              style={{ padding: '0.5rem 1rem' }}
                            >
                              Adicionar
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            

            <div className="form-actions" style={{ marginTop: '2rem' }}>
              <button type="button" className="action-btn cancel" onClick={handleCloseManageModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Visualizar Plano */}
      {showViewModal && currentPlan && (
        <div className="form-modal" onClick={handleCloseViewModal}>
          <div className="form-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
            <h2>Plano: {currentPlan.type}</h2>
            <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Nível:</strong> {currentPlan.level}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Dificuldade:</strong> {currentPlan.difficulty}
              </div>
              <div>
                <strong>Descrição:</strong>
                <p style={{ marginTop: '0.5rem', color: '#666' }}>{currentPlan.description}</p>
              </div>
            </div>

            {currentPlan.exercises && currentPlan.exercises.length > 0 ? (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>
                  Exercícios do Plano ({currentPlan.exercises.length})
                </h3>
                {Object.entries(groupExercisesByMuscleGroup(currentPlan.exercises)).map(([muscleGroup, exercises]) => (
                  <div key={muscleGroup} style={{ marginBottom: '2rem' }}>
                    <h4 style={{ 
                      color: '#333', 
                      marginBottom: '1rem', 
                      paddingBottom: '0.5rem',
                      borderBottom: '2px solid #ff6b35',
                      fontSize: '1.2rem'
                    }}>
                      {muscleGroup}
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {exercises.map((ex, index) => (
                        <div
                          key={`${ex.exerciseId}-${index}`}
                          style={{
                            padding: '1.5rem',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                            <div>
                              <strong style={{ fontSize: '1.1rem', color: '#333' }}>{ex.exerciseName}</strong>
                              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>
                                <span className="muscle-group">{ex.muscleGroup}</span> • {ex.equipmentName}
                              </div>
                            </div>
                            <div style={{ 
                              backgroundColor: '#ff6b35', 
                              color: 'white', 
                              padding: '0.5rem 1rem', 
                              borderRadius: '5px',
                              fontWeight: 'bold',
                              fontSize: '0.9rem'
                            }}>
                              {ex.series} x {ex.repetitions}
                            </div>
                          </div>
                          {ex.exerciseDescription && (
                            <div style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem', fontStyle: 'italic' }}>
                              {ex.exerciseDescription}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
                Nenhum exercício adicionado ao plano ainda.
              </p>
            )}

            <div className="form-actions" style={{ marginTop: '2rem' }}>
              <button type="button" className="action-btn cancel" onClick={handleCloseViewModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlans;
