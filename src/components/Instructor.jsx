import React from 'react';

const Instructor = () => {
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
    <section className="section instructor-section">
      <div className="container">
        <div className="instructor-content">
          <div className="instructor-text">
            <h2>Become an Instructor</h2>
            <p>Share your expertise with thousands of learners worldwide. Join our community of passionate educators and help shape the future of education.</p>
            <p>We're looking for subject matter experts who can create engaging, high-quality content that makes a real difference in students' lives.</p>
            <a href="#apply" className="btn btn-primary" onClick={() => scrollToSection('contact')}>Apply Now</a>
          </div>
          <div className="instructor-visual">
            <h3>Instructor</h3>
            <p>Transform careers through expert knowledge sharing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
