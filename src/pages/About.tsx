import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="page-header">
        <h1>About IOUB</h1>
        <p>Building Excellence Through Open Education</p>
      </section>

      <div className="about-container">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            International Open University Bangladesh was founded with a vision to democratize higher education 
            and make quality learning accessible to every deserving student regardless of their geographical location 
            or socioeconomic background.
          </p>
          <p>
            Since our inception, we've grown into a leading educational institution with 10,000+ students, 200+ faculty 
            members, and offering 50+ academic programs across various disciplines.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, accessible, and innovative education that empowers individuals to achieve their 
            full potential and contribute meaningfully to society and the global community.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become Bangladesh's leading open university, recognized globally for academic excellence, innovation, 
            and transformative education that creates leaders and changemakers.
          </p>
        </section>

        <section className="about-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>Excellence</h4>
              <p>Commitment to highest standards in education</p>
            </div>
            <div className="value-card">
              <h4>Accessibility</h4>
              <p>Making education available to all</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Embracing modern teaching methods</p>
            </div>
            <div className="value-card">
              <h4>Integrity</h4>
              <p>Maintaining highest ethical standards</p>
            </div>
            <div className="value-card">
              <h4>Community</h4>
              <p>Building supportive learning communities</p>
            </div>
            <div className="value-card">
              <h4>Sustainability</h4>
              <p>Responsible growth and development</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Achievements</h2>
          <div className="achievements">
            <div className="achievement-item">
              <span className="achievement-number">10,000+</span>
              <p>Students Educated</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">50+</span>
              <p>Academic Programs</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">200+</span>
              <p>Faculty Members</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">95%</span>
              <p>Graduate Employment Rate</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Leadership</h2>
          <div className="leadership">
            <div className="leader-card">
              <h4>Hamza Hasan Adnan</h4>
              <p className="position">Founder & Chancellor</p>
              <p>
                Visionary educator with 20+ years of experience in higher education. Dedicated to making 
                quality education accessible to all Bangladeshi students.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
