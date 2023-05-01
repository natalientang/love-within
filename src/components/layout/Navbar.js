import logo from '../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';

export default function Navbar() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          setIsMenuActive(false);
        }
      });

  return (
    <>
      <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className="navbar-container">
      <button className={`hamburger ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </button>
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          </div>
        </div>
        <div>
          <div className={`navbar-links ${isMenuActive ? 'is-active' : ''}`}>
            <a href="/about">about</a>
            <a href="/dailyaffirmations">daily affirmations</a>
            <a href="/journal">journal</a>
            <a href="/resources">resources</a>
            <div className="navbar-icon">
            <a href="/favorites">
              <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} className="heart-icon" size="lg" />
              </a>
            <a href="/profile">
              <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className="user-icon" size="lg"/>
            </a>
            </div>
          </div>
        </div>
        <div className={`mobile-nav ${isMenuActive ? 'is-active' : ''}`}>
            <a href="/profile">profile</a>
            <a href="/favorites">favorites</a>
            <a href="/about">about</a>
            <a href="/dailyaffirmations">daily affirmations</a>
            <a href="/journal">journal</a>
            <a href="/resources">resources</a>
        </div>
      </div>
    </>
  );
}
