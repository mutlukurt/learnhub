import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Master Data Science: Machine Learning Fundamentals',
      category: 'data',
      categoryName: 'Data Science',
      level: 'Intermediate',
      duration: '12 weeks',
      instructor: 'Dr. Sarah Chen',
      rating: '4.9'
    },
    {
      id: 2,
      title: 'Advanced Web Development with React & Node.js',
      category: 'web',
      categoryName: 'Web Development',
      level: 'Advanced',
      duration: '8 weeks',
      instructor: 'Michael Rodriguez',
      rating: '4.9'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery: SEO & Content Strategy',
      category: 'marketing',
      categoryName: 'Marketing',
      level: 'Beginner',
      duration: '10 weeks',
      instructor: 'Emma Thompson',
      rating: '4.9'
    }
  ];

  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section-header">
          <h2>Our Popular Courses</h2>
          <p>Discover our most sought-after programs designed to help you achieve your professional goals.</p>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className={`course-header ${course.category}`}>{course.categoryName}</div>
              <div className="course-content">
                <div className="course-meta">
                  <span className="course-level">{course.level}</span>
                  <span className="course-duration">{course.duration}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">Instructor: {course.instructor}</p>
                <div className="course-footer">
                  <a href="#" className="view-course-btn">View Course</a>
                  <div className="course-rating">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
