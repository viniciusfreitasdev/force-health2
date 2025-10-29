import React, { useState } from 'react';
import './App.css';
import './components/internal/internal.css';
import {
  Dashboard,
  UserManagement,
  WorkoutPlans,
  Analytics,
  EquipmentManagement,
  ExerciseManagement
} from './components/internal';

const InternalApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'workouts':
        return <WorkoutPlans />;
      case 'analytics':
        return <Analytics />;
      case 'equipments':
        return <EquipmentManagement />;
      case 'exercises':
        return <ExerciseManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="internal-app">
      <nav className="internal-nav">
        <div className="nav-brand">
          <h2>Force Health - Admin</h2>
        </div>
        <div className="nav-menu">
          <button 
            className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`nav-btn ${currentView === 'users' ? 'active' : ''}`}
            onClick={() => setCurrentView('users')}
          >
            👥 Clientes
          </button>
          <button 
            className={`nav-btn ${currentView === 'workouts' ? 'active' : ''}`}
            onClick={() => setCurrentView('workouts')}
          >
            💪 Planos
          </button>
          {/* <button 
            className={`nav-btn ${currentView === 'analytics' ? 'active' : ''}`}
            onClick={() => setCurrentView('analytics')}
          >
            📈 Analytics
          </button> */}
          <button 
            className={`nav-btn ${currentView === 'equipments' ? 'active' : ''}`}
            onClick={() => setCurrentView('equipments')}
          >
            🏋️ Equipamentos
          </button>
          <button 
            className={`nav-btn ${currentView === 'exercises' ? 'active' : ''}`}
            onClick={() => setCurrentView('exercises')}
          >
            💪 Exercícios
          </button>
        </div>
      </nav>
      
      <main className="internal-main">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default InternalApp;
