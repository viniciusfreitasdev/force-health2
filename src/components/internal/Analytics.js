import React from 'react';

const Analytics = () => {
  const analyticsData = {
    userGrowth: [
      { month: 'Jan', users: 1200 },
      { month: 'Fev', users: 1350 },
      { month: 'Mar', users: 1500 },
      { month: 'Abr', users: 1680 },
      { month: 'Mai', users: 1850 },
      { month: 'Jun', users: 2100 }
    ],
    workoutStats: {
      totalWorkouts: 15420,
      completedWorkouts: 12850,
      averageDuration: 45,
      mostPopularPlan: 'Musculação Intensiva'
    },
    revenue: [
      { month: 'Jan', revenue: 8500 },
      { month: 'Fev', revenue: 9200 },
      { month: 'Mar', revenue: 10800 },
      { month: 'Abr', revenue: 12500 },
      { month: 'Mai', revenue: 14200 },
      { month: 'Jun', revenue: 16800 }
    ]
  };

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1>Analytics e Relatórios</h1>
        <div className="date-range">
          <select>
            <option>Últimos 6 meses</option>
            <option>Último ano</option>
            <option>Últimos 2 anos</option>
          </select>
        </div>
      </div>

      <div className="analytics-overview">
        <div className="overview-card">
          <h3>Crescimento de Usuários</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              {analyticsData.userGrowth.map((data, index) => (
                <div key={index} className="bar" style={{ height: `${(data.users / 2100) * 100}%` }}>
                  <span className="bar-value">{data.users}</span>
                </div>
              ))}
            </div>
            <div className="chart-labels">
              {analyticsData.userGrowth.map((data, index) => (
                <span key={index} className="label">{data.month}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="overview-card">
          <h3>Receita Mensal</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              {analyticsData.revenue.map((data, index) => (
                <div key={index} className="bar revenue" style={{ height: `${(data.revenue / 16800) * 100}%` }}>
                  <span className="bar-value">R$ {data.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="chart-labels">
              {analyticsData.revenue.map((data, index) => (
                <span key={index} className="label">{data.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="workout-stats">
        <h2>Estatísticas de Treinos</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">🏋️</div>
            <div className="stat-content">
              <h4>Total de Treinos</h4>
              <span className="stat-number">{analyticsData.workoutStats.totalWorkouts.toLocaleString()}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h4>Treinos Concluídos</h4>
              <span className="stat-number">{analyticsData.workoutStats.completedWorkouts.toLocaleString()}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h4>Duração Média</h4>
              <span className="stat-number">{analyticsData.workoutStats.averageDuration} min</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h4>Plano Mais Popular</h4>
              <span className="stat-text">{analyticsData.workoutStats.mostPopularPlan}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reports-section">
        <h2>Relatórios Detalhados</h2>
        <div className="reports-grid">
          <button className="report-btn">
            <span className="report-icon">📊</span>
            <span>Relatório de Usuários</span>
          </button>
          <button className="report-btn">
            <span className="report-icon">💪</span>
            <span>Relatório de Treinos</span>
          </button>
          <button className="report-btn">
            <span className="report-icon">💰</span>
            <span>Relatório Financeiro</span>
          </button>
          <button className="report-btn">
            <span className="report-icon">📈</span>
            <span>Relatório de Performance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
