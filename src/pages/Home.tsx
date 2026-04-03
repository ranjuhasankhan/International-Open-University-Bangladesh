import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [tickerIndex, setTickerIndex] = useState(0)

  const announcements = [
    '📢 Admission Open for All Programs - Apply Now!',
    '📧 Contact: ranjuhasankhan@gmail.com',
    '📱 WhatsApp: 01839696587',
    '🎓 50+ Academic Programs Available',
    '👥 10000+ Active Students',
    '🏫 200+ Expert Faculty Members'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home">
      {/* Live Ticker */}
      <div className="ticker">
        <div className="ticker-content">
          {announcements[tickerIndex]}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1>International Open University Bangladesh</h1>
          <p className="tagline">Excellence in Education | Innovation in Learning</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Academic Programs</p>
            </div>
            <div className="stat">
              <h3>10K+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Expert Faculty</p>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary">
              Apply Now
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="faculties-preview">
        <h2>Our Faculties</h2>
        <div className="faculties-grid">
          <Link to="/faculties" className="faculty-card">
            <span>🔬</span>
            <h3>Science & Technology</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>⚕️</span>
            <h3>Medicine & Health</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>💼</span>
            <h3>Business & Management</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>⚖️</span>
            <h3>Law & Justice</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>📚</span>
            <h3>Arts & Humanities</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>🌾</span>
            <h3>Agriculture</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>🏗️</span>
            <h3>Engineering</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>🎓</span>
            <h3>Education</h3>
          </Link>
          <Link to="/faculties" className="faculty-card">
            <span>☪️</span>
            <h3>Islamic Studies</h3>
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="founder-content">
          <h2>Founded by Visionary Leadership</h2>
          <div className="founder-message">
            <p className="founder-quote">
              "Education is the most powerful weapon which you can use to change the world. Our mission is to provide accessible, 
              quality education to every deserving student in Bangladesh and beyond."
            </p>
            <p className="founder-name">— Hamza Hasan Adnan</p>
            <p className="founder-title">Founder, International Open University Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Why Choose IOUB */}
      <section className="why-choose">
        <h2>Why Choose IOUB?</h2>
        <div className="benefits-grid">
          <div className="benefit-card slide-in-left">
            <div className="benefit-icon">🌍</div>
            <h3>Global Standards</h3>
            <p>International curriculum aligned with global quality standards and best practices.</p>
          </div>

          <div className="benefit-card fade-in">
            <div className="benefit-icon">👨‍🏫</div>
            <h3>Expert Faculty</h3>
            <p>200+ highly qualified professors with advanced degrees and practical experience.</p>
          </div>

          <div className="benefit-card slide-in-right">
            <div className="benefit-icon">💻</div>
            <h3>Modern Facilities</h3>
            <p>State-of-the-art laboratories, library, and digital infrastructure for enhanced learning.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Career Support</h3>
            <p>Comprehensive career counseling and job placement assistance for all graduates.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>Affordable Fees</h3>
            <p>Competitive tuition rates with multiple scholarship options available.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Diverse Community</h3>
            <p>Welcoming environment for students from all backgrounds and cultures.</p>
          </div>
        </div>
      </section>

      {/* News & Latest Updates */}
      <section className="news-preview">
        <h2>Latest News & Updates</h2>
        <div className="news-grid">
          <div className="news-card fade-in">
            <div className="news-image">📰</div>
            <h3>New Research Center Inaugurated</h3>
            <p>We're excited to announce the opening of our Advanced AI Research Center with modern facilities.</p>
            <span className="news-date">March 25, 2025</span>
          </div>

          <div className="news-card fade-in">
            <div className="news-image">🎓</div>
            <h3>Scholarship Program Expanded</h3>
            <p>IOUB announces expanded scholarship program offering up to 75% tuition coverage for meritorious students.</p>
            <span className="news-date">March 20, 2025</span>
          </div>

          <div className="news-card fade-in">
            <div className="news-image">🏆</div>
            <h3>Students Win National Competition</h3>
            <p>Our talented students won first place in the National Innovation Challenge with their groundbreaking project.</p>
            <span className="news-date">March 15, 2025</span>
          </div>
        </div>
        <Link to="/news" className="view-all-btn">View All News →</Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Future?</h2>
        <p>Join thousands of students already succeeding at IOUB</p>
        <a href="https://wa.me/8801839696587?text=I'm%20interested%20in%20admission" className="btn btn-primary btn-large">
          Start Your Application
        </a>
      </section>
    </div>
  )
}
