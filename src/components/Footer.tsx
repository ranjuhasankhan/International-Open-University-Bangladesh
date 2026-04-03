import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>International Open University Bangladesh</h3>
          <p>
            Providing quality education to students across Bangladesh and beyond through innovative, 
            accessible, and world-class academic programs.
          </p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faculties">Faculties</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/news">News & Events</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Academic</h3>
          <ul>
            <li><Link to="/campus">Campus Life</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/fees-scholarships">Fees & Scholarships</Link></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#careers">Career Services</a></li>
            <li><a href="#library">Digital Library</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>📧 <a href="mailto:ranjuhasankhan@gmail.com">ranjuhasankhan@gmail.com</a></li>
            <li>📱 <a href="https://wa.me/8801839696587">+88 01839696587</a></li>
            <li>📍 Sirajganj, Dhaka, Bangladesh</li>
            <li>👤 Founder: Hamza Hasan Adnan</li>
          </ul>
          <Link to="/contact" className="contact-btn">Send Message</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 International Open University Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  )
}
