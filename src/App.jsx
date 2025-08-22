import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningJourney from './components/LearningJourney';
import Courses from './components/Courses';
import Instructor from './components/Instructor';
import Innovations from './components/Innovations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LearningJourney />
      <Courses />
      <Instructor />
      <Innovations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
