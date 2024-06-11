import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-header">
      <section className="navbar">
        <div className="nav-logo">
          <a href="/index.html">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div
          id="mobile-container"
          className={`mobile-menu-container ${menuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-box">
            <i className="close-icon" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faXmark} size="fa-2xl" />
            </i>
            <div className="mobile-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#rooms">Rooms</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="mobile-social">
              <i>
                <FontAwesomeIcon icon={faFacebookF} size="fa-2xl" />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} size="fa-2xl" />
              </i>
              <i>
                <FontAwesomeIcon icon={faXTwitter} size="fa-2xl" />
              </i>
              <i>
                <FontAwesomeIcon icon={faYoutube} size="fa-2xl" />
              </i>
            </div>
            <div className="mobile-contact">
              <div className="mobile-tel">
                <i>
                  <FontAwesomeIcon icon={faPhone} size="fa-2xl" />
                </i>
                (+505) 733 6053
              </div>
              <div className="mobile-mail">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} size="fa-2xl" />
                </i>
                hayadmu@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <i className="navbar-menu-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} size="fa-2xl" />
          </i>
        </div>
        <div className="nav-tel">
          <i>
            <FontAwesomeIcon icon={faPhone} size="fa-2xl" />
          </i>
          (+505) 733 6053
        </div>
        <div className="nav-email">
          <i>
            <FontAwesomeIcon icon={faEnvelope} size="fa-2xl" />
          </i>
          hayadmu@gmail.com
        </div>

        <div className="nav-right">
          <div className="social">
            <i>
              <FontAwesomeIcon icon={faFacebookF} size="fa-2xl" />
            </i>
            <i>
              <FontAwesomeIcon icon={faInstagram} size="fa-2xl" />
            </i>
            <i>
              <FontAwesomeIcon icon={faXTwitter} size="fa-2xl" />
            </i>
            <i>
              <FontAwesomeIcon icon={faYoutube} size="fa-2xl" />
            </i>
          </div>
          <div className="location">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="fa-2xl" />
            </i>
            Tohatchi, New Mexico
          </div>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
