import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
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
    <div>
      <section className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div id="mobile-container" className={`mobile-menu-container ${menuOpen ? "open" : ""}`}>
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
                  <a href="#">Rooms</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
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
                </i>{" "}
                0163 210 0000
              </div>
              <div className="mobile-mail">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} size="fa-2xl" />
                </i>{" "}
                hayadmu@example.com
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <i className="navbar-menu-icon" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={faBars} size="fa-2xl" />
          </i>
        </div>
      </section>
    </div>
  );
}

export default NavBar;