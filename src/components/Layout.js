import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Layout({ children }) {
    const toggleMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        hamburger.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
    }

    window.addEventListener('resize', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        if (window.innerWidth >= 768) {
          mobileNav.classList.remove('is-active');
          const hamburger = document.querySelector('.hamburger');
          hamburger.classList.remove('is-active');
        }
      });

  return (
    <>
      <nav style={{ backgroundColor: "#FAFAFA" }}>
      <div className="navbar-container">
      <button className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
      </button>
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          </div>
        </div>
        <div>
          <div className="navbar-links">
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
        <div className="mobile-nav">
            <a href="/profile">profile</a>
            <a href="/favorites">favorites</a>
            <a href="/about">about</a>
            <a href="/dailyaffirmations">daily affirmations</a>
            <a href="/journal">journal</a>
            <a href="/resources">resources</a>
        </div>
      </nav>

      {children}
      <footer>footer</footer>
    </>
  );
}
