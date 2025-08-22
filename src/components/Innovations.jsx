import React from 'react';

const Innovations = () => {
  const innovations = [
    {
      id: 1,
      icon: '💡',
      title: 'AI-Powered Learning',
      description: 'Our intelligent system adapts to your learning style and pace.'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Real-Time Collaboration',
      description: 'Work together with peers and instructors in live virtual classrooms.'
    },
    {
      id: 3,
      icon: '✅',
      title: 'Personalized Paths',
      description: 'Custom learning journeys based on your goals and progress.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile Learning',
      description: 'Access your courses anytime, anywhere on any device.'
    },
    {
      id: 5,
      icon: '🎮',
      title: 'Gamified Experience',
      description: 'Earn badges and rewards as you master new skills.'
    },
    {
      id: 6,
      icon: '💼',
      title: 'Career Support',
      description: 'Get job placement assistance and resume building help.'
    }
  ];

  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-header">
          <h2>Our Innovations</h2>
          <p>Discover how we're revolutionizing online education with cutting-edge technology and pedagogical approaches.</p>
        </div>
        <div className="innovations-grid">
          {innovations.map((innovation) => (
            <div key={innovation.id} className="innovation-card">
              <div className="innovation-icon">{innovation.icon}</div>
              <h3>{innovation.title}</h3>
              <p>{innovation.description}</p>
              <a href="#" className="learn-more-btn">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;
