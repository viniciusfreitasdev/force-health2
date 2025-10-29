import React, { useState } from 'react';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'João Silva', email: 'joao@email.com', status: 'Ativo', plan: 'Premium' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', status: 'Ativo', plan: 'Básico' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', status: 'Inativo', plan: 'Gratuito' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', status: 'Ativo', plan: 'Premium' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management">
      <div className="user-management-header">
        <h1>Gerenciamento de Clientes</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>
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

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Plano</th>
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
                  <span className={`plan ${user.plan.toLowerCase()}`}>
                    {user.plan}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Editar</button>
                  <button className="action-btn delete">Excluir</button>
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
