import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const UserManagement = () => {
  // Carregar clientes do localStorage ou usar dados padrão
  const getInitialUsers = () => {
    const saved = localStorage.getItem('users');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, name: 'João Silva', email: 'joao@email.com', status: 'Ativo', plan: 'Premium' },
      { id: 2, name: 'Maria Santos', email: 'maria@email.com', status: 'Ativo', plan: 'Básico' },
      { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', status: 'Inativo', plan: 'Gratuito' },
      { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', status: 'Ativo', plan: 'Premium' },
    ];
  };

  const [users, setUsers] = useState(getInitialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [userForQR, setUserForQR] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'Ativo'
  });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
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
    
    let updatedUsers;
    if (editingUser) {
      // Editar cliente existente
      updatedUsers = users.map(u => 
        u.id === editingUser.id 
          ? { ...formData, id: editingUser.id }
          : u
      );
    } else {
      // Criar novo cliente
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        ...formData
      };
      updatedUsers = [...users, newUser];
    }
    
    setUsers(updatedUsers);
    // Salvar no localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Reset form
    setFormData({ name: '', email: '', status: 'Ativo' });
    setEditingUser(null);
    setShowForm(false);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      status: user.status
    });
    setShowForm(true);
  };

  const handleViewQR = (user) => {
    setUserForQR(user);
    setShowQRModal(true);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      const updatedUsers = users.filter(u => u.id !== userToDelete.id);
      setUsers(updatedUsers);
      // Salvar no localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const closeQRModal = () => {
    setShowQRModal(false);
    setUserForQR(null);
  };

  // Geração de dados dos QR Codes por plano
  const qrPlans = [
    { key: 'INICIANTE', title: 'Treino Iniciante', workoutType: 'INICIANTES' },
    { key: 'INTERMEDIARIO', title: 'Treino Intermediario', workoutType: 'BEM ESTAR' },
    { key: 'AVANCADO', title: 'Treino Avançado', workoutType: 'BOA FORMA' }
  ];

  const buildQrValue = (plan) => {
    return JSON.stringify({
      userId: userForQR?.id,
      userName: userForQR?.name,
      userEmail: userForQR?.email,
      plan: plan.key,
      workoutType: plan.workoutType
    });
  };

  const downloadSvg = (wrapperId, filename) => {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const svg = wrapper.querySelector('svg');
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', status: 'Ativo' });
    setEditingUser(null);
    setShowForm(false);
  };

  return (
    <div className="user-management">
      <div className="user-management-header">
        <h1>Gerenciamento de Clientes</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
          <button className="create-btn" onClick={() => setShowForm(true)}>
            + Novo Cliente
          </button>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat">
          <span className="stat-label">Total de Clientes:</span>
          <span className="stat-value">{users.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Clientes Ativos:</span>
          <span className="stat-value">{users.filter(u => u.status === 'Ativo').length}</span>
        </div>
      </div>

      {showForm && (
        <div className="form-modal" onClick={handleCancel}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingUser ? 'Editar Cliente' : 'Novo Cliente'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome do Cliente *</label>
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
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status *</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="action-btn">
                  {editingUser ? 'Salvar Alterações' : 'Criar Cliente'}
                </button>
                <button type="button" className="action-btn cancel" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showQRModal && (
        <div className="form-modal" onClick={closeQRModal}>
          <div className="form-content qr-content" onClick={(e) => e.stopPropagation()}>
            <h2>QR Codes do Cliente</h2>
            <div className="qr-grid-container">
              {qrPlans.map((plan) => {
                const wrapperId = `qr-wrap-${plan.key}`;
                const filename = `${(userForQR?.name || 'cliente').replace(/\s+/g, '_')}_${plan.key}.svg`;
                return (
                  <div className="qr-grid-item" key={plan.key}>
                    <div className="qr-code-wrapper" id={wrapperId}>
                      <QRCode
                        value={buildQrValue(plan)}
                        size={220}
                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                    <div className="qr-item-footer">
                      <div className="qr-item-title">{plan.title}</div>
                      <button
                        type="button"
                        className="qr-download-btn"
                        aria-label={`Baixar ${plan.title}`}
                        onClick={() => downloadSvg(wrapperId, filename)}
                        title="Baixar QR Code"
                      >
                        ⬇️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="form-actions">
              <button 
                type="button" 
                className="action-btn cancel" 
                onClick={closeQRModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="form-modal" onClick={cancelDelete}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <h2>Confirmar Exclusão</h2>
            <div className="delete-confirmation">
              <p>
                Tem certeza que deseja excluir o cliente <strong>{userToDelete?.name}</strong>?
              </p>
              <p className="delete-warning">
                Esta ação não pode ser desfeita.
              </p>
            </div>
            <div className="form-actions">
              <button 
                type="button" 
                className="action-btn delete" 
                onClick={confirmDelete}
              >
                Excluir
              </button>
              <button 
                type="button" 
                className="action-btn cancel" 
                onClick={cancelDelete}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="action-btn edit" 
                    onClick={() => handleEdit(user)}
                  >
                    Editar
                  </button>
                  <button 
                    className="action-btn view" 
                    onClick={() => handleViewQR(user)}
                  >
                    QR Code
                  </button>
                  <button 
                    className="action-btn delete" 
                    onClick={() => handleDelete(user)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
