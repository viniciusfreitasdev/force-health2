import React, { useState, useEffect } from 'react';

const ExerciseManagement = () => {
  // Carregar equipamentos do localStorage (cadastrados na tela de Equipamentos)
  const getAvailableEquipments = () => {
    const saved = localStorage.getItem('equipments');
    if (saved) {
      const equipments = JSON.parse(saved);
      return equipments.map(eq => ({ id: eq.id, name: eq.name, type: eq.type }));
    }
    // Se não houver equipamentos salvos, retorna uma lista vazia
    return [];
  };

  const [availableEquipments, setAvailableEquipments] = useState(getAvailableEquipments);

  // Atualizar equipamentos quando o componente montar ou quando houver mudanças
  useEffect(() => {
    const handleStorageChange = () => {
      setAvailableEquipments(getAvailableEquipments());
    };

    // Verificar mudanças no localStorage periodicamente
    const interval = setInterval(() => {
      handleStorageChange();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const [exercises, setExercises] = useState([
    { 
      id: 1, 
      name: 'Supino Reto', 
      description: 'Exercício para peitoral, deltoides e tríceps',
      muscleGroup: 'Peitoral',
      equipmentId: 1,
      equipmentName: 'Halteres'
    },
    { 
      id: 2, 
      name: 'Agachamento', 
      description: 'Exercício para quadríceps, glúteos e posterior',
      muscleGroup: 'Pernas',
      equipmentId: 2,
      equipmentName: 'Barra Reta'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    muscleGroup: '',
    equipmentId: ''
  });

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.muscleGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedEquipment = availableEquipments.find(eq => eq.id === parseInt(formData.equipmentId));
    
    if (editingExercise) {
      // Editar exercício existente
      setExercises(exercises.map(ex => 
        ex.id === editingExercise.id 
          ? { 
              ...formData, 
              id: editingExercise.id,
              equipmentId: parseInt(formData.equipmentId),
              equipmentName: selectedEquipment ? selectedEquipment.name : ''
            }
          : ex
      ));
    } else {
      // Criar novo exercício
      const newExercise = {
        id: exercises.length > 0 ? Math.max(...exercises.map(ex => ex.id)) + 1 : 1,
        ...formData,
        equipmentId: parseInt(formData.equipmentId),
        equipmentName: selectedEquipment ? selectedEquipment.name : ''
      };
      setExercises([...exercises, newExercise]);
    }

    // Reset form
    setFormData({ name: '', description: '', muscleGroup: '', equipmentId: '' });
    setEditingExercise(null);
    setShowForm(false);
  };

  const handleEdit = (exercise) => {
    setEditingExercise(exercise);
    setFormData({
      name: exercise.name,
      description: exercise.description,
      muscleGroup: exercise.muscleGroup,
      equipmentId: exercise.equipmentId.toString()
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este exercício?')) {
      setExercises(exercises.filter(ex => ex.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', description: '', muscleGroup: '', equipmentId: '' });
    setEditingExercise(null);
    setShowForm(false);
  };

  return (
    <div className="exercise-management">
      <div className="exercise-management-header">
        <h1>Gerenciamento de Exercícios</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
          <button className="create-btn" onClick={() => setShowForm(true)}>
            + Novo Exercício
          </button>
        </div>
      </div>

      <div className="exercise-stats">
        <div className="stat">
          <span className="stat-label">Total de Exercícios:</span>
          <span className="stat-value">{exercises.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Grupos Musculares:</span>
          <span className="stat-value">
            {new Set(exercises.map(ex => ex.muscleGroup)).size}
          </span>
        </div>
      </div>

      {showForm && (
        <div className="form-modal" onClick={handleCancel}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingExercise ? 'Editar Exercício' : 'Novo Exercício'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome do Exercício *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="muscleGroup">Grupo Muscular *</label>
                <select
                  id="muscleGroup"
                  name="muscleGroup"
                  value={formData.muscleGroup}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione o grupo muscular</option>
                  <option value="Peitoral">Peitoral</option>
                  <option value="Costas">Costas</option>
                  <option value="Ombros">Ombros</option>
                  <option value="Bíceps">Bíceps</option>
                  <option value="Tríceps">Tríceps</option>
                  <option value="Pernas">Pernas</option>
                  <option value="Glúteos">Glúteos</option>
                  <option value="Abdômen">Abdômen</option>
                  <option value="Cardio">Cardio</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="equipmentId">Equipamento Utilizado *</label>
                <select
                  id="equipmentId"
                  name="equipmentId"
                  value={formData.equipmentId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione o equipamento</option>
                  {availableEquipments.map(equipment => (
                    <option key={equipment.id} value={equipment.id}>
                      {equipment.name} - {equipment.type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="action-btn">
                  {editingExercise ? 'Salvar Alterações' : 'Criar Exercício'}
                </button>
                <button type="button" className="action-btn cancel" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="exercises-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Grupo Muscular</th>
              <th>Equipamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredExercises.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                  Nenhum exercício encontrado
                </td>
              </tr>
            ) : (
              filteredExercises.map(exercise => (
                <tr key={exercise.id}>
                  <td>{exercise.id}</td>
                  <td><strong>{exercise.name}</strong></td>
                  <td>{exercise.description || '-'}</td>
                  <td>
                    <span className="muscle-group">{exercise.muscleGroup}</span>
                  </td>
                  <td>{exercise.equipmentName || '-'}</td>
                  <td>
                    <button 
                      className="action-btn edit" 
                      onClick={() => handleEdit(exercise)}
                    >
                      Editar
                    </button>
                    <button 
                      className="action-btn delete" 
                      onClick={() => handleDelete(exercise.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseManagement;

