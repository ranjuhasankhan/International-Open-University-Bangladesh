import './CampusLife.css'

export default function CampusLife() {
  return (
    <div className="campus-life">
      <section className="page-header">
        <h1>Campus Life</h1>
        <p>Experience the IOUB Community</p>
      </section>

      <div className="campus-container">
        <section className="campus-highlights">
          <h2>Our Campus Facilities</h2>
          <div className="highlights-grid">
            <div className="highlight-card fade-in">
              <div className="highlight-image">📚</div>
              <h3>Modern Library</h3>
              <p>State-of-the-art library with 50,000+ books and digital resources.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🔬</div>
              <h3>Advanced Laboratories</h3>
              <p>Fully equipped science and computer labs for hands-on learning.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🏛️</div>
              <h3>Modern Classrooms</h3>
              <p>Interactive learning spaces with multimedia facilities.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🏠</div>
              <h3>Student Hostel</h3>
              <p>Comfortable accommodation for resident and visiting students.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🧘</div>
              <h3>Mosque & Prayer Hall</h3>
              <p>Dedicated spaces for spiritual and religious activities.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🍔</div>
              <h3>Cafeteria & Food Court</h3>
              <p>Variety of affordable dining options for all students.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">⚽</div>
              <h3>Sports Facilities</h3>
              <p>Playgrounds and indoor courts for sports and recreation.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">🚌</div>
              <h3>Transport Services</h3>
              <p>University bus service connecting major areas.</p>
            </div>
            <div className="highlight-card fade-in">
              <div className="highlight-image">💻</div>
              <h3>IT Center</h3>
              <p>High-speed internet and computer facilities available 24/7.</p>
            </div>
          </div>
        </section>

        <section className="student-life">
          <h2>Student Life at IOUB</h2>
          <div className="life-content">
            <p>
              IOUB is more than just academics. Our vibrant campus community offers numerous opportunities 
              for personal growth, networking, and skill development. Students engage in clubs, societies, 
              sports, cultural events, and volunteer activities.
            </p>
            <div className="activities-grid">
              <div className="activity">
                <span>🎭</span>
                <h4>Cultural Events</h4>
                <p>Regular cultural festivals and performances</p>
              </div>
              <div className="activity">
                <span>📖</span>
                <h4>Student Clubs</h4>
                <p>30+ clubs covering various interests</p>
              </div>
              <div className="activity">
                <span>🎓</span>
                <h4>Seminars & Workshops</h4>
                <p>Industry expert sessions and skill training</p>
              </div>
              <div className="activity">
                <span>🌍</span>
                <h4>Community Service</h4>
                <p>Volunteer programs and social initiatives</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
