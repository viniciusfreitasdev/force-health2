import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sistema de Treinamento</h1>
            <h2>Force Health</h2>
            <p className='cta-text'>TREINAMENTO PROFISSIONAL PARA PESSOAS COMUNS</p>
            <button className="cta-button">Saiba Mais</button>
          </div>
          
          <div className="hero-image">
            <div style={{
              width: '400px',
              height: '600px',
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              💪
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                🔥
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
