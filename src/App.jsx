import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const popularCourses = [
    {
      title: "Master Data Science: Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      duration: "12 weeks",
      level: "Intermediate",
      image: "https://placehold.co/400x250/6366f1/ffffff?text=Data+Science"
    },
    {
      title: "Advanced Web Development with React & Node.js",
      instructor: "Michael Rodriguez",
      duration: "8 weeks",
      level: "Advanced",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Web+Development"
    },
    {
      title: "Digital Marketing Mastery: SEO & Content Strategy",
      instructor: "Emma Thompson",
      duration: "10 weeks",
      level: "Beginner",
      image: "https://placehold.co/400x250/ec4899/ffffff?text=Marketing"
    }
  ];

  const innovations = [
    {
      title: "AI-Powered Learning",
      description: "Our intelligent system adapts to your learning style and pace.",
      icon: "💡"
    },
    {
      title: "Real-Time Collaboration",
      description: "Work together with peers and instructors in live virtual classrooms.",
      icon: "👥"
    },
    {
      title: "Personalized Paths",
      description: "Custom learning journeys based on your goals and progress.",
      icon: "✅"
    },
    {
      title: "Mobile Learning",
      description: "Access your courses anytime, anywhere on any device.",
      icon: "📚"
    },
    {
      title: "Gamified Experience",
      description: "Earn badges and rewards as you master new skills.",
      icon: "🎮"
    },
    {
      title: "Career Support",
      description: "Get job placement assistance and resume building help.",
      icon: "💼"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      content: "This platform transformed my career. The hands-on projects gave me real-world experience that employers value.",
      avatar: "AJ"
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director",
      content: "The course structure was perfect for my busy schedule. I learned at my own pace and saw immediate results.",
      avatar: "MG"
    },
    {
      name: "James Wilson",
      role: "Data Analyst",
      content: "The instructors are exceptional. They make complex topics easy to understand and provide valuable feedback.",
      avatar: "JW"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with animation */}
      <motion.header 
        className="fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`px-6 py-4 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-white">LearnHub</div>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Courses', 'Platform', 'Resources', 'About'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    scrollY > 50 ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            <motion.button 
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                scrollY > 50 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            
            {/* Modern hamburger menu */}
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 flex flex-col gap-1">
                <motion.span 
                  className={`block h-0.5 rounded-full ${
                    scrollY > 50 ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />
                <motion.span 
                  className={`block h-0.5 rounded-full ${
                    scrollY > 50 ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span 
                  className={`block h-0.5 rounded-full ${
                    scrollY > 50 ? 'bg-gray-700' : 'bg-white'
                  }`}
                  animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                />
              </div>
            </motion.button>
          </div>
          
          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden bg-white shadow-lg rounded-b-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-4 p-6">
                  {['Courses', 'Platform', 'Resources', 'About'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-indigo-600 py-2 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button 
                    className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium mt-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Request Demo
                  </motion.button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Transform Your Career
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    With Expert-Led Training
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-indigo-100 leading-relaxed"
                  variants={fadeInUp}
                >
                  Unlock your potential with our comprehensive online learning platform. Learn from industry experts and gain practical skills that drive career advancement.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.button 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Learning Today
                </motion.button>
                <motion.button 
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-all"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>▶</span>
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-6 pt-8"
                variants={fadeInUp}
              >
                <motion.div 
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">15,000+</div>
                  <div className="text-indigo-100 text-sm">Students</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-indigo-100 text-sm">Courses</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-indigo-100 text-sm">Instructors</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <motion.img 
                  src="https://placehold.co/500x500/6366f1/ffffff?text=Student+Learning" 
                  alt="Student learning" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-white text-xl">⚡</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800">Transform Your Learning Journey</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Industry-Relevant Skills", desc: "Learn the exact skills employers are looking for in today's competitive market." },
                  { title: "Flexible Learning", desc: "Study at your own pace with lifetime access to course materials." },
                  { title: "Expert Instructors", desc: "Learn directly from professionals with real-world experience in their fields." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={fadeInUp}
            >
              {[
                "https://placehold.co/300x200/8b5cf6/ffffff?text=Online+Class",
                "https://placehold.co/300x200/ec4899/ffffff?text=Project+Work",
                "https://placehold.co/300x200/f59e0b/ffffff?text=Live+Session",
                "https://placehold.co/300x200/10b981/ffffff?text=Certification"
              ].map((src, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={src} 
                    alt={`Feature ${index + 1}`} 
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Popular Courses */}
      <motion.section 
        id="courses" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Popular Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after programs designed to help you achieve your professional goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Course
                    </button>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">4.9</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Become an Instructor */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Become an Instructor</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Share your expertise with thousands of learners worldwide. Join our community of passionate educators and help shape the future of education.
              </p>
              <p className="text-gray-600">
                We're looking for subject matter experts who can create engaging, high-quality content that makes a real difference in students' lives.
              </p>
              <motion.button 
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://placehold.co/500x500/6366f1/ffffff?text=Instructor" 
                  alt="Instructor" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Innovations */}
      <motion.section 
        id="platform" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Innovations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we're revolutionizing online education with cutting-edge technology and pedagogical approaches.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <motion.div 
                  key={index}
                  className="border border-gray-100 rounded-xl p-6 hover:border-indigo-200 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{innovation.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{innovation.title}</h3>
                  <p className="text-gray-600">{innovation.description}</p>
                  <motion.button 
                    className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students about how our platform has helped them achieve their goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-8">
                <div className="flex space-x-4">
                  {testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all ${
                        index === 0 
                          ? 'border-indigo-500 bg-indigo-500 text-white scale-125' 
                          : 'border-gray-200 bg-gray-200 text-gray-700'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="bg-gray-100 rounded-xl p-6 inline-block">
                  <p className="text-gray-700 italic">"I've always struggled with coding, but this platform made it accessible and fun. The interactive exercises helped me understand concepts I previously found intimidating."</p>
                </div>
                <div className="mt-6">
                  <div className="text-lg font-semibold text-gray-800">Jennifer Doe</div>
                  <div className="text-gray-600">Software Developer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        id="resources" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our courses or want to learn more? Reach out to our team for personalized assistance.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div className="flex items-end">
                  <motion.button
                    type="submit"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">LearnHub</div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with innovative online education solutions that deliver real results.
              </p>
              <div className="flex space-x-4">
                {['🐦', '📘', '📸'].map((icon, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-xl"
                    whileHover={{ y: -3, scale: 1.2 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'Courses', 'Platform', 'About Us'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                {['Blog', 'Help Center', 'Community', 'Events'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  { icon: '📧', text: 'info@learnhub.com' },
                  { icon: '📞', text: '+1 (555) 123-4567' },
                  { icon: '📍', text: 'San Francisco, CA' }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2023 LearnHub. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
