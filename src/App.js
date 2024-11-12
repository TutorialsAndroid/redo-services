import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Redo</h1>
        <p>We provide services like website development, android app development, and franchise selling.</p>
      </header>

      <section className="App-services">
        <h2>Our Services</h2>
        <ul>
          <li>Website Development</li>
          <li>Android App Development</li>
          <li>Franchise Selling</li>
        </ul>
      </section>

      <section className="App-projects">
        <h2>Past Projects</h2>
        <div className="projects-gallery">
          <img src="path_to_your_project_screenshot1.jpg" alt="Project 1" />
          <img src="path_to_your_project_screenshot2.jpg" alt="Project 2" />
          <img src="path_to_your_project_screenshot3.jpg" alt="Project 3" />
          {/* Add more images as needed */}
        </div>
      </section>

      <section className="App-contact">
        <h2>Contact Us</h2>
        <p>Email: contact@redo.com</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Redo Street, Startup City, ST 45678</p>
      </section>
    </div>
  );
}

export default App;
