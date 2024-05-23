import React from 'react';
import './AboutUs.css';
import aboutUs1 from '../images/about-us-photo-1.webp';
import aboutUs2 from '../images/about-us-photo-2.webp';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="about-us-titles">
          <h2>About Us</h2>
          <h3>Hayadmu <br /> Hotel & Resort</h3>
        </div>
        <div className="about-us-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione ab voluptas magnam asperiores cumque quas illum sunt recusandae tenetur voluptatum enim consequatur, optio vel?</p>
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
