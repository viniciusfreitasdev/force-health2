import React from 'react';

const HowToCreate = () => {
  return (
    <section className="how-to-create">
      <div className="container">
        <h2>CONHEÇA QUEM ESTÁ POR TRÁS DO FORCE HEALTH</h2>
        <div className="how-to-create-content">
          <p>
            Olá! Meu nome é <strong>Gustavo</strong>, e sou o responsável pelo Sistema de Treinamento FORCE HEALTH. 
            Antes de apresentar o sistema, deixe-me me apresentar para que você entenda melhor a experiência por trás desta metodologia.
          </p>
          
          <ul className="goals-list">
            <li>31 anos de prática ininterrupta de musculação</li>
            <li>+20 anos formado em Educação Física pela UNIUBE</li>
            <li>18 anos como instrutor de musculação e personal trainer</li>
            <li>16 anos coordenando academias</li>
            <li>15 anos treinando atletas de fisiculturismo profissional</li>
          </ul>
          
          <p>
            Toda essa experiência acumulada ao longo de décadas me permitiu desenvolver um sistema único e eficaz. 
            O FORCE HEALTH não é apenas mais um método de treino - é o resultado de anos de estudo, prática e 
            refinamento com atletas que buscam excelência no treinamento.
          </p>
          
          <div className="workout-types">
            <div className="workout-type">
              <div className="workout-type-icon">🎓</div>
              <h3>FORMAÇÃO</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">💪</div>
              <h3>EXPERIÊNCIA</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">🏆</div>
              <h3>ATLETAS</h3>
            </div>
            <div className="workout-type">
              <div className="workout-type-icon">⚡</div>
              <h3>METODOLOGIA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToCreate;
