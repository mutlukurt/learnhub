import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Career<br /><span className="highlight">With Expert-Led Training</span></h1>
          <p>Unlock your potential with our comprehensive online learning platform. Learn from industry experts and gain practical skills that drive career advancement.</p>
          <div className="cta-buttons">
            <a href="#courses" className="btn btn-primary" onClick={() => scrollToSection('courses')}>
              Start Learning Today
            </a>
            <a href="#demo" className="btn btn-secondary">
              <span>▶</span> Watch Demo
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">15,000+</div>
              <div>Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div>Courses</div>
            </div>
            <div className="stat">
              <div className="stat-number">150+</div>
              <div>Instructors</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="student-card">
            <h3>Student Learning</h3>
            <p>Join thousands of learners transforming their careers with our expert-led courses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
