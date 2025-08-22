import React from 'react';

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>LearnHub</h3>
            <p>Empowering learners worldwide with innovative online education solutions that deliver real results.</p>
            <div className="social-links">
              <a href="#" aria-label="Mobile">📱</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#courses" onClick={() => scrollToSection('courses')}>Courses</a>
            <a href="#platform" onClick={() => scrollToSection('platform')}>Platform</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About Us</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Community</a>
            <a href="#">Events</a>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <a href="mailto:info@learnhub.com">📧 info@learnhub.com</a>
            <a href="tel:+15551234567">📞 +1 (555) 123-4567</a>
            <a href="#">📍 San Francisco, CA</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
