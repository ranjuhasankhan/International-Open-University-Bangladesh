import './Facilities.css'

const facilities = [
  { icon: '📚', name: 'Central Library', description: '50,000+ books, digital resources, study areas' },
  { icon: '🔬', name: 'Science Labs', description: 'Physics, Chemistry, Biology, research facilities' },
  { icon: '💻', name: 'Computer Labs', description: 'Modern computers, software, 24/7 internet access' },
  { icon: '🏠', name: 'Student Hostel', description: 'Safe accommodation with modern amenities' },
  { icon: '🧘', name: 'Mosque & Prayer Hall', description: 'Multi-faith prayer rooms, Islamic facilities' },
  { icon: '🍔', name: 'Food Court & Cafeteria', description: 'Affordable meals, variety of cuisines' },
  { icon: '⚽', name: 'Sports Complex', description: 'Football, volleyball, basketball, badminton' },
  { icon: '🚌', name: 'Transport Services', description: 'Bus service to major areas and from campus' },
  { icon: '🏥', name: 'Medical Center', description: 'Health checkups, emergency care, counseling' },
  { icon: '💼', name: 'Business Center', description: 'Office spaces for student enterprises' },
  { icon: '🎭', name: 'Student Auditorium', description: 'Events, seminars, cultural programs' },
  { icon: '📱', name: 'IT & WiFi Services', description: 'High-speed internet, tech support, 24/7' }
]

export default function Facilities() {
  return (
    <div className="facilities">
      <section className="page-header">
        <h1>Campus Facilities</h1>
        <p>World-Class Infrastructure for Holistic Student Development</p>
      </section>

      <div className="facilities-container">
        <section className="facilities-intro">
          <h2>Complete Campus Amenities</h2>
          <p>
            IOUB provides comprehensive facilities designed to support academic excellence, 
            student wellbeing, and overall development. Every facility is maintained to the highest standards.
          </p>
        </section>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card fade-in">
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.name}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>

        <section className="facilities-benefits">
          <h2>Why Our Facilities Matter</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>🎯 Enhanced Learning</h3>
              <p>Modern facilities create optimal environments for academic achievement and skill development.</p>
            </div>
            <div className="benefit">
              <h3>🤝 Community Building</h3>
              <p>Common spaces foster friendships and collaborative learning among diverse student groups.</p>
            </div>
            <div className="benefit">
              <h3>💪 Holistic Development</h3>
              <p>Sports, wellness, and recreational facilities support physical and mental health.</p>
            </div>
            <div className="benefit">
              <h3>🌟 Professional Growth</h3>
              <p>Research labs and business centers prepare students for real-world professional challenges.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
