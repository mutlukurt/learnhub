import React from 'react';

const LearningJourney = () => {
  return (
    <section className="section learning-journey">
      <div className="container">
        <div className="journey-grid">
          <div className="journey-content">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2>Transform Your Learning Journey</h2>
            </div>
            <div className="journey-item">
              <div className="journey-icon">✓</div>
              <div className="journey-text">
                <h3>Industry-Relevant Skills</h3>
                <p>Learn the exact skills employers are looking for in today's competitive market.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-icon">✓</div>
              <div className="journey-text">
                <h3>Flexible Learning</h3>
                <p>Study at your own pace with lifetime access to course materials.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-icon">✓</div>
              <div className="journey-text">
                <h3>Expert Instructors</h3>
                <p>Learn directly from professionals with real-world experience in their fields.</p>
              </div>
            </div>
          </div>
          <div className="journey-visual">
            <div className="visual-card online">Online Class</div>
            <div className="visual-card project">Project Work</div>
            <div className="visual-card live">Live Session</div>
            <div className="visual-card cert">Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
