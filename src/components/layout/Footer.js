import logo from "../images/logo.png";
import mailLogo from "../images/mail.png";
import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <div className="footer-font-links-title">info</div>
              <div className="footer-font-links"><a href="/about">about</a></div>
              <div className="footer-font-links"><a href="/resources">resources</a></div>
            </div>
          </Col>
          <Col className="text-center footer-logo">
          <a href="/">
            <img
              src={logo}
              alt="footer-logo"
              style={{
                maxWidth: "170px",
                height: "auto",
                marginBottom: "20px",
                marginTop: "40px",
              }}
            />
            </a>
          </Col>
          <Col>
          <div className="text-center">
              <div className="footer-font-links-title">socials</div>
              <div className="footer-font-links">
                <a href="/contact">
                  <img src={mailLogo} alt="Contact" width="15" height="15" className="social-logo"/>
                  contact</a>
              </div>
              <div className="footer-font-links">
                <a href="https://github.com/natalientang">
                  <img src={githubLogo} alt="GitHub" width="15" height="15" className="social-logo"/>
                github</a>
              </div>
              <div className="footer-font-links">
                <a href="https://www.linkedin.com/in/natalientang/">
                  <img src={linkedinLogo} alt="LinkedIn" width="15" height="15" className="linkedin-logo"/>
                  linkedin</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Row

        style={{ position: "absolute", bottom: "0", width: "100%" }}
        className="text-center"
      >
        <div className="footer-font">
          copyright © 2023 love within • natalie tang
        </div>
      </Row>
    </footer>
  );
}
