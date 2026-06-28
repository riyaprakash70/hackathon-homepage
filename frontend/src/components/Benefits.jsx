import React from 'react';
import '../styles/benefits.css';

const Benefits = () => {
  const points = [
    { title: 'Learn & Grow', desc: 'Gain new skills and learn from industry experts.', icon: '🧑‍💻' },
    { title: 'Real Impact', desc: 'Build solutions that create real-world impact.', icon: '🚀' },
    { title: 'Community', desc: 'Connect with like-minded innovators and creators.', icon: '🌐' },
    { title: 'Exciting Prizes', desc: 'Win amazing prizes, goodies, and rewards.', icon: '🎁' },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-left">
        <h2>Why Join Codways Hackathons?</h2>
        <p>Our hackathons are designed to help you learn, collaborate, and grow.</p>
        <button className="btn-join-now">Join Now &rarr;</button>
      </div>
      
      <div className="benefits-right">
        {points.map((p, idx) => (
          <div key={idx} className="benefit-item-box">
            <div className="benefit-icon-square">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;