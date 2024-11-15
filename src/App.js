import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Contact.css';
import webDevImg from './assets/pic.jpg'; // Add your image path
import androidDevImg from './assets/pic1.jpeg'; // Add your image path
import franchiseImg from './assets/pic3.jpg'; // Add your image path
import projectImg1 from './assets/pic3.jpg'; // Add your image path
import projectImg2 from './assets/pic3.jpg'; // Add your image path
import projectImg3 from './assets/pic3.jpg'; // Add your image path
import projectImg4 from './assets/pic3.jpg'; // Add your image path
import projectImg5 from './assets/pic3.jpg'; // Add your image path
import projectImg6 from './assets/pic3.jpg'; // Add your image path

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="App">
      <nav className="App-navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-navbar-links">
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
            <p>We offer franchise opportunities to expand your business.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="App-projects">
        <h2>Past Projects</h2>
        <div className="projects-gallery">
          <img src={projectImg1} alt="Project 1" />
          <img src={projectImg2} alt="Project 2" />
          <img src={projectImg3} alt="Project 3" />
          <img src={projectImg4} alt="Project 4" />
          <img src={projectImg5} alt="Project 5" />
          <img src={projectImg6} alt="Project 6" />
          {/* Add more images as needed */}
        </div>
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
