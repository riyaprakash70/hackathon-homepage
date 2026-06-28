import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Build. Innovate.<br />
          <span className="accent-text">Inspire.</span>
        </h1>
        <p className="hero-subtitle">
          Codways Hackathon Portal is your gateway to exciting hackathons, collaboration, and innovation. 
          <span className="highlight-text"> Compete. Learn. Create Impact.</span>
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">Explore Hackathons &rarr;</button>
          <button className="btn-secondary">
            How It Works <span className="play-icon">&#9658;</span>
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-pill">
            <span className="pill-icon">🏆</span>
            <div>
              <strong>Exciting Prizes</strong>
              <p>Win amazing rewards</p>
            </div>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">👥</span>
            <div>
              <strong>Learn & Network</strong>
              <p>Connect with experts</p>
            </div>
          </div>
          <div className="feature-pill">
            <span className="pill-icon">&lt;/&gt;</span>
            <div>
              <strong>Build Real Solutions</strong>
              <p>Solve real-world problems</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-graphic-container">
        {/* Placeholder for the abstract tech illustration shown on the right side */}
        <div className="abstract-card main-card">
          <div className="card-header-mock">&lt;/&gt;</div>
        </div>
        <div className="abstract-card floating-card-left"></div>
        <div className="abstract-card floating-card-right">🏆</div>
      </div>
    </section>
  );
};

export default Hero;