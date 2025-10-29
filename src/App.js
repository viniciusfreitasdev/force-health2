import React from 'react';
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
  News,
  Footer
} from './components/landing';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StartForFree />
      <WhatIsWorkoutPlanner />
      <CreateWorkout />
      <HowToCreate />
      <FreeMonthlyPlan />
      <WeeklyWorkoutPlan />
      <News />
      <Footer />
    </div>
  );
}

export default App;