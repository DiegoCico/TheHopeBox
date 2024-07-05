import React from 'react';
import './style.css';


// CREATE A SECTION FOR SHARE THE LOVE
const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="animate-header">Our Community Non-Profit</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#founders">Founders</a></li>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#">Share The Love</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about" className="animate-section">
          <h2>About Us</h2>
          <p>We are dedicated to making a positive impact in our community through various initiatives and programs.</p>
          <div className="image-container">
            <img src="path-to-your-image.jpg" alt="About Us" />
          </div>
        </section>
        <section id="founders" className="animate-section">
          <h2>Founders</h2>
          <p>Meet the passionate individuals behind our organization.</p>
          <div className="image-container">
            <img src="path-to-your-image.jpg" alt="Founders" />
          </div>
        </section>
        <section id="mission" className="animate-section">
          <h2>Our Mission</h2>
          <p>We aim to support and uplift our community through dedicated service and programs.</p>
          <div className="image-container">
            <img src="path-to-your-image.jpg" alt="Our Mission" />
          </div>
        </section>
      </main>
      <footer className="animate-footer">
        <p>&copy; 2024 Our Community Non-Profit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
