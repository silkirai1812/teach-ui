import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import { faEuroSign, faPerson } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="logo-col d-flex align-items-center gap-1">
          <img src="/images/logo.png" alt="logo" /><span>teach</span>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <a>Pricing</a>
          <a>Overview</a>
          <a>Browse</a>
          <a>Accessibility <span className="badge">BETA</span></a>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <a>Brainstorming</a>
          <a>Ideation</a>
          <a>Wireframing</a>
          <a>Research</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a>Help Center</a>
          <a>Blog</a>
          <a>Tutorials</a>
          <a>FAQs</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a>Contact Us</a>
          <a>Developers</a>
          <a>Documentation</a>
          <a>Integrations</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a>About</a>
          <a>Press</a>
          <a>Events</a>
          <a className="demo-link">Request Demo →</a>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>uteach @ {new Date().getFullYear()}. All rights reserved.</p>

        <div className="footer-links">
          <a>Terms</a>
          <a>Privacy</a>
          <a>Contact</a>
          <a><FontAwesomeIcon icon={faGlobe} style={{ width: '18px' }} /> EN</a>
          <a><FontAwesomeIcon icon={faEuroSign} style={{ width: '15px' }} /> EUR</a>
          <a><FontAwesomeIcon icon={faPerson} style={{ width: '15px' }} /></a>
        </div>
      </div>

    </footer>
  );
}