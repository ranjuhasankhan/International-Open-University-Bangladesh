import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-container">
          <div className="contact-info">
            <span>📧 ranjuhasankhan@gmail.com</span>
            <span>📱 WhatsApp: 01839696587</span>
            <span>📍 Sirajganj, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-container">
          <Link to="/" className="logo">
            🎓 IOUB
          </Link>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/faculties" onClick={() => setIsMenuOpen(false)}>
              Faculties
            </Link>
            <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
              Admissions
            </Link>
            <Link to="/campus" onClick={() => setIsMenuOpen(false)}>
              Campus Life
            </Link>
            <Link to="/research" onClick={() => setIsMenuOpen(false)}>
              Research
            </Link>
            <Link to="/facilities" onClick={() => setIsMenuOpen(false)}>
              Facilities
            </Link>
            <Link to="/fees-scholarships" onClick={() => setIsMenuOpen(false)}>
              Fees & Scholarships
            </Link>
            <Link to="/news" onClick={() => setIsMenuOpen(false)}>
              News
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a 
              href="https://wa.me/8801839696587?text=I'm%20interested%20in%20admission" 
              className="nav-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
