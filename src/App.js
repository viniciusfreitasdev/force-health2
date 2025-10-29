import React, { useState } from 'react';
import './App.css';
import './components/landing/landing.css';
import {
  Header,
  Hero,
  StartForFree,
  WhatIsWorkoutPlanner,
  CreateWorkout,
  HowToCreate,
  FreeMonthlyPlan,
  WeeklyWorkoutPlan,
  Footer,
  Login
} from './components/landing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'login') {
    return (
      <div className="App">
        <Header onNavigate={handleNavigation} />
        <Login onBackToHome={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      <Hero />
      <StartForFree />
      <WhatIsWorkoutPlanner />
      <CreateWorkout />
      <HowToCreate />
      <FreeMonthlyPlan />
      <WeeklyWorkoutPlan />
      {/* <News /> */}
      <Footer />
    </div>
  );
}

export default App;