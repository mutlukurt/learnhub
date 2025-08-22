import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: "I've always struggled with coding, but this platform made it accessible and fun. The interactive exercises helped me understand concepts I previously found intimidating.",
      author: "Jennifer Doe",
      role: "Software Developer"
    },
    {
      id: 1,
      text: "The marketing course completely transformed my approach to digital strategy. The real-world projects gave me the confidence to apply what I learned immediately.",
      author: "Michael Garcia",
      role: "Marketing Manager"
    },
    {
      id: 2,
      text: "As a data scientist, I was impressed by the depth and quality of the machine learning curriculum. The instructors really know their stuff.",
      author: "Jessica Wong",
      role: "Data Scientist"
    }
  ];

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Student Testimonials</h2>
          <p>Hear from our students about how our platform has helped them achieve their goals.</p>
        </div>
        <div className="testimonial-content">
          <div className="testimonial-avatars">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`avatar ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => handleTestimonialChange(index)}
              >
                {testimonial.author.split(' ').map(name => name[0]).join('')}
              </div>
            ))}
          </div>
          <div className="testimonial-text">
            {testimonials[activeTestimonial].text}
          </div>
          <div className="testimonial-author">
            {testimonials[activeTestimonial].author}
          </div>
          <div className="testimonial-role">
            {testimonials[activeTestimonial].role}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
