import React from 'react';
import "./Header.css";
import slider1 from '../images/slider1.webp';
import slider2 from '../images/slider2.webp';
import slider3 from '../images/slider3.webp';
import slider4 from '../images/slider4.webp';

const Header = () => {
  return (
    <div>
      <section className="header-slider">
        <div className="header-container">
          <img src={slider1} className="header-slide slide1" alt="Slider 1" />
          <img src={slider2} className="header-slide slide2" alt="Slider 2" />
          <img src={slider3} className="header-slide slide3" alt="Slider 3" />
          <img src={slider4} className="header-slide slide4" alt="Slider 4" />
          <div className="header-shadow">
            <div className="header-details">
              <h1>Welcome to Hayadmu Hotel</h1>
              <p>Our hotel offers top-notch amenities, spacious rooms, and exceptional service to make your stay unforgettable.</p>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

