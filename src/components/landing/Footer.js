import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FORCE HEALTH</h3>
            <p>
              Sistema de treinamento profissional desenvolvido por Gustavo, com mais de 31 anos de experiência 
              em musculação. Treinos que mudam toda semana para todos os níveis.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>PROGRAMAS</h3>
            <a href="#iniciantes">Treino para Iniciantes</a>
            <a href="#bem-estar">Treino para Bem Estar</a>
            <a href="#boa-forma">Treino para Boa Forma</a>
            <a href="#halteres">Treino com Halteres</a>
            <a href="#peso-corporal">Treino com Peso Corporal</a>
          </div>
          
          <div className="footer-section">
            <h3>CONTATO</h3>
            <p>Email: mail@forcehealth.com</p>
            <a href="#privacy">Política de Privacidade</a>
            <a href="#terms">Termos e Condições</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Force Health © 2025 - Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
