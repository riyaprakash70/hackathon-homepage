import React from 'react';
import '../styles/stats.css';

const Stats = () => {
  return (
    <div className="stats-strip">
      <div className="stat-box">
        <span className="stat-icon">🏆</span>
        <div className="stat-info">
          <h3>50+</h3>
          <p>Hackathons Organized</p>
        </div>
      </div>
      <div className="stat-box">
        <span className="stat-icon">👥</span>
        <div className="stat-info">
          <h3>10K+</h3>
          <p>Participants</p>
        </div>
      </div>
      <div className="stat-box">
        <span className="stat-icon">&lt;/&gt;</span>
        <div className="stat-info">
          <h3>2K+</h3>
          <p>Projects Submitted</p>
        </div>
      </div>
      <div className="stat-box">
        <span className="stat-icon">🏛️</span>
        <div className="stat-info">
          <h3>100+</h3>
          <p>Partner Organizations</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;