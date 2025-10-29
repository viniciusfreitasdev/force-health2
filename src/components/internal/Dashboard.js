import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema interno do Force Health</p>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Usuários Ativos</h3>
          <span className="stat-number">1,234</span>
        </div>
        <div className="stat-card">
          <h3>Planos Criados</h3>
          <span className="stat-number">567</span>
        </div>
        <div className="stat-card">
          <h3>Treinos Concluídos</h3>
          <span className="stat-number">8,901</span>
        </div>
        <div className="stat-card">
          <h3>Receita Mensal</h3>
          <span className="stat-number">R$ 12.345</span>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="recent-activities">
          <h2>Atividades Recentes</h2>
          <ul>
            <li>Novo usuário cadastrado: João Silva</li>
            <li>Plano de treino "Musculação Intensiva" criado</li>
            <li>Usuário Maria Santos completou treino de cardio</li>
            <li>Novo artigo publicado: "Benefícios do HIIT"</li>
          </ul>
        </div>
        
        <div className="quick-actions">
          <h2>Ações Rápidas</h2>
          <button className="action-btn">Criar Novo Plano</button>
          <button className="action-btn">Gerenciar Usuários</button>
          <button className="action-btn">Ver Relatórios</button>
          <button className="action-btn">Configurações</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
