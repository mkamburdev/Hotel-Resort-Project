import React from 'react';
import './AboutUs.css';
import aboutUs1 from '../images/about-us-photo-1.webp';
import aboutUs2 from '../images/about-us-photo-2.webp';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <div className="about-us-titles">
          <h2>About Us</h2>
          <h3>Hayadmu Hotel & Resort</h3>
        </div>
        <div className="about-us-text">
          <p>Welcome to Hayadmu Hotel & Resort! We are dedicated to providing you with an unforgettable experience during your stay. Our luxurious accommodations, exceptional service, and breathtaking views will make your visit truly memorable.</p>
        </div>
      </div>
      <div className="about-us-photos">
        <img src={aboutUs1} alt="Hayadmu Hotel About Us Photo 1" />
        <img src={aboutUs2} alt="Hayadmu Hotel About Us Photo 2" />
      </div>
    </section>
  )
}

export default AboutUs;
