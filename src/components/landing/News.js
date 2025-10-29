import React from 'react';

const News = () => {
  const newsArticles = [
    {
      title: "UNDERSTANDING MOTOR SKILLS: THE FOUNDATION OF MOVEMENT",
      category: "General",
      image: "🧠"
    },
    {
      title: "BEST SUPPLEMENTS FOR MUSCLE PRESERVATION ON GLP-1",
      category: "General",
      image: "💊"
    },
    {
      title: "CYCLING INJURY PREVENTION: TRAINING, RECOVERY, AND LONG-TERM SAFETY TIPS",
      category: "General",
      image: "🚴‍♂️"
    }
  ];

  return (
    <section className="news">
      <div className="container">
        <h2>NEWS</h2>
        <p>
          Stay informed with the latest updates on exercise science, nutrition trends, 
          and fitness innovations. Our expert team regularly publishes articles to help 
          you make informed decisions about your health and fitness journey.
        </p>
        
        <div className="news-cards">
          {newsArticles.map((article, index) => (
            <div key={index} className="news-card">
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: '#fff'
              }}>
                {article.image}
              </div>
              <div className="news-card-content">
                <h3>{article.title}</h3>
                <p className="category">{article.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
