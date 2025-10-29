import React from 'react';

const Header = ({ onNavigate }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('login');
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/self-icons/logo.jpg" 
              alt="Force Health Logo" 
              className="logo-img" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          
          <nav>
            <ul className="nav">
              {/* <li><a href="#home">INÍCIO</a></li> */}
              {/* <li><a href="#calculators">CALCULADORAS</a></li> */}
              <li><a href="#exercises">LISTA DE EXERCÍCIOS</a></li>
              <li><a href="#workouts">TREINOS UNICOS</a></li>
              <li><a href="#plans">PLANOS DE TREINO</a></li>
              <li><a href="#login" onClick={handleLoginClick}>LOGIN/CADASTRO</a></li>
            </ul>
          </nav>
          
          <div className="social-icons">
            <a href="https://instagram.com" className="social-icon">
              <img src="/self-icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" className="social-icon">
              <img src="/self-icons/youtube.png" alt="YouTube" />
            </a>
            <a href="https://facebook.com" className="social-icon">
              <img src="/self-icons/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
