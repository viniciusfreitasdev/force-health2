import React, { useState } from 'react';

const EquipmentManagement = () => {
  // Carregar equipamentos do localStorage ou usar dados padrão
  const getInitialEquipments = () => {
    const saved = localStorage.getItem('equipments');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, name: 'Halteres', type: 'Peso Livre', description: 'Halteres ajustáveis de 2,5kg a 50kg', image: null },
      { id: 2, name: 'Barra Reta', type: 'Peso Livre', description: 'Barra olímpica padrão de 20kg', image: null },
      { id: 3, name: 'Esteira', type: 'Cardio', description: 'Esteira elétrica profissional', image: null },
    ];
  };

  const [equipments, setEquipments] = useState(getInitialEquipments);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    image: null
  });

  const filteredEquipments = equipments.filter(equipment =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    equipment.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let updatedEquipments;
    if (editingEquipment) {
      // Editar equipamento existente
      updatedEquipments = equipments.map(eq => 
        eq.id === editingEquipment.id 
          ? { ...formData, id: editingEquipment.id }
          : eq
      );
    } else {
      // Criar novo equipamento
      const newEquipment = {
        id: equipments.length > 0 ? Math.max(...equipments.map(eq => eq.id)) + 1 : 1,
        ...formData
      };
      updatedEquipments = [...equipments, newEquipment];
    }
    
    setEquipments(updatedEquipments);
    // Salvar no localStorage para compartilhar com outras telas
    localStorage.setItem('equipments', JSON.stringify(updatedEquipments));

    // Reset form
    setFormData({ name: '', type: '', description: '', image: null });
    setEditingEquipment(null);
    setShowForm(false);
  };

  const handleEdit = (equipment) => {
    setEditingEquipment(equipment);
    setFormData({
      name: equipment.name,
      type: equipment.type,
      description: equipment.description,
      image: equipment.image
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este equipamento?')) {
      const updatedEquipments = equipments.filter(eq => eq.id !== id);
      setEquipments(updatedEquipments);
      // Atualizar localStorage
      localStorage.setItem('equipments', JSON.stringify(updatedEquipments));
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', type: '', description: '', image: null });
    setEditingEquipment(null);
    setShowForm(false);
  };

  return (
    <div className="equipment-management">
      <div className="equipment-management-header">
        <h1>Gerenciamento de Equipamentos</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar equipamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
          <button className="create-btn" onClick={() => setShowForm(true)}>
            + Novo Equipamento
          </button>
        </div>
      </div>

      {/* <div className="equipment-stats">
        <div className="stat">
          <span className="stat-label">Total de Equipamentos:</span>
          <span className="stat-value">{equipments.length}</span>
        </div>
      </div> */}

      {showForm && (
        <div className="form-modal" onClick={handleCancel}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingEquipment ? 'Editar Equipamento' : 'Novo Equipamento'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome do Equipamento *</label>
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
                <label htmlFor="type">Tipo *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Peso Livre">Peso Livre</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Máquina">Máquina</option>
                  <option value="Funcional">Funcional</option>
                  <option value="Acessório">Acessório</option>
                </select>
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
                <label htmlFor="image">Imagem (opcional)</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {formData.image && (
                  <p className="file-name">{formData.image.name || 'Arquivo selecionado'}</p>
                )}
              </div>

              <div className="form-actions">
                <button type="submit" className="action-btn">
                  {editingEquipment ? 'Salvar Alterações' : 'Criar Equipamento'}
                </button>
                <button type="button" className="action-btn cancel" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="equipments-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredEquipments.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                  Nenhum equipamento encontrado
                </td>
              </tr>
            ) : (
              filteredEquipments.map(equipment => (
                <tr key={equipment.id}>
                  <td>{equipment.id}</td>
                  <td>{equipment.name}</td>
                  <td>
                    <span className="equipment-type">{equipment.type}</span>
                  </td>
                  <td>{equipment.description || '-'}</td>
                  <td>{equipment.image ? '✓' : '-'}</td>
                  <td>
                    <button 
                      className="action-btn edit" 
                      onClick={() => handleEdit(equipment)}
                    >
                      Editar
                    </button>
                    <button 
                      className="action-btn delete" 
                      onClick={() => handleDelete(equipment.id)}
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

export default EquipmentManagement;

