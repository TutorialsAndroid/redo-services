import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Contact.css';
import webDevImg from './assets/web_development.png';
import androidDevImg from './assets/android_development.jpeg';
import franchiseImg from './assets/franchise_selling.png';
import projectImg1 from './assets/projects_ss/pharma.png';
import projectImg2 from './assets/projects_ss/coffee.png';
import projectImg3 from './assets/projects_ss/cakeshop.png';
import projectImg4 from './assets/projects_ss/bakeryshop.png';
import projectImg5 from './assets/projects_ss/gym.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  const projectsContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const projects = [
    {
      img: projectImg1,
      title: 'Pharma Website',
      description: 'A comprehensive website for a pharmaceutical company, featuring product listings, company information, and contact details.'
    },
    {
      img: projectImg2,
      title: 'Coffee Shop Website',
      description: 'An engaging website for a coffee shop, showcasing the menu, special offers, and an online ordering system.'
    },
    {
      img: projectImg3,
      title: 'Cake Shop Website',
      description: 'A delightful website for a cake shop, featuring a gallery of cakes, customer reviews, and an online order form.'
    },
    {
      img: projectImg4,
      title: 'Bakery Shop Website',
      description: 'A charming website for a bakery shop, highlighting the variety of baked goods, daily specials, and store locations.'
    },
    {
      img: projectImg5,
      title: 'Gym Website',
      description: 'A dynamic website for a gym, providing class schedules, trainer profiles, membership options, and a booking system.'
    }
  ];

  // We always show all projects for larger screens
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="App">
      <nav className="App-navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`App-navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#projects">Our Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Welcome to Redo</h1>
        <p>We provide services like website development, android app development, and franchise selling.</p>
      </header>

      <section id="services" className="App-services">
        <h2>Our Services</h2>
        <div className="App-services-row">
          <div className="App-card">
            <img src={webDevImg} alt="Website Development" />
            <h3>Website Development</h3>
            <p>We build responsive and robust websites tailored to your needs.</p>
          </div>
          <div className="App-card">
            <img src={androidDevImg} alt="Android App Development" />
            <h3>Android App Development</h3>
            <p>Our team develops user-friendly and efficient Android applications.</p>
          </div>
          <div className="App-card">
            <img src={franchiseImg} alt="Franchise Selling" />
            <h3>Franchise Selling</h3>
            <p>We offer attractive franchise opportunities to help you expand your business and reach new markets.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="App-projects">
        <h2>Our Projects</h2>
        <div ref={projectsContainerRef} className="App-projects-row">
          {visibleProjects.map((project, index) => (
            <div key={index} className="App-card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className="scroll-buttons">
          <button onClick={handleScrollLeft}>&lt;</button>
          <button onClick={handleScrollRight}>&gt;</button>
        </div>
        {/* Show the button only if 'showAllProjects' is false */}
        {!showAllProjects && (
          <button className="view-more-button" onClick={() => setShowAllProjects(true)}>View More</button>
        )}
      </section>

      <section id="contact" className="App-contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019185429055!2d144.9537352151449!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0d72f1b%3A0x3a0b0c3a77c0df4b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1581421042487!5m2!1sen!2sau"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
