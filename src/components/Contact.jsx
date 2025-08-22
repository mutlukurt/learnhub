import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert('Thank you for subscribing! We\'ll keep you updated with our latest courses and news.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have questions about our courses or want to learn more? Reach out to our team for personalized assistance.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubscribe}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
