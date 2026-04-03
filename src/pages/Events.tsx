import { useState } from 'react'
import './Events.css'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'workshop' | 'retreat' | 'webinar' | 'meetup'
  attendees: number
  price: number
  image: string
}

const events: Event[] = [
  {
    id: 1,
    title: '7-Day Silent Meditation Retreat',
    description: 'Immerse yourself in a week-long meditation retreat in a peaceful mountain setting. Perfect for deepening your practice.',
    date: 'April 15-22, 2025',
    time: 'Full Day',
    location: 'Mountain Haven Retreat Center, Colorado',
    type: 'retreat',
    attendees: 45,
    price: 899,
    image: '🏔️'
  },
  {
    id: 2,
    title: 'Mindfulness Workshop: Finding Calm in Chaos',
    description: 'Learn practical mindfulness techniques to manage stress and anxiety in your daily life.',
    date: 'April 5, 2025',
    time: '10:00 AM - 12:30 PM',
    location: 'Community Center, Main Hall',
    type: 'workshop',
    attendees: 32,
    price: 45,
    image: '🎯'
  },
  {
    id: 3,
    title: 'Online Webinar: The Science of Meditation',
    description: 'Dr. Lisa Chen explores the latest neuroscience research on meditation and its benefits.',
    date: 'April 10, 2025',
    time: '6:00 PM - 7:30 PM',
    location: 'Online (Zoom)',
    type: 'webinar',
    attendees: 215,
    price: 0,
    image: '🧬'
  },
  {
    id: 4,
    title: 'Weekly Meditation Meetup',
    description: 'Join our community for a casual meditation session followed by tea and discussion.',
    date: 'Every Saturday',
    time: '9:00 AM',
    location: 'Peace Center, Studio A',
    type: 'meetup',
    attendees: 28,
    price: 10,
    image: '☕'
  },
  {
    id: 5,
    title: 'Yoga & Meditation Fusion Retreat',
    description: 'Combine yoga and meditation for a holistic wellness experience over a weekend.',
    date: 'May 2-4, 2025',
    time: 'Full Weekend',
    location: 'Serenity Spa Resort, California',
    type: 'retreat',
    attendees: 38,
    price: 499,
    image: '🧘‍♀️'
  },
  {
    id: 6,
    title: 'Advanced Breathwork Techniques',
    description: 'Master advanced pranayama and breathing techniques with certified instructor.',
    date: 'April 12, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Wellness Studio, Room B',
    type: 'workshop',
    attendees: 18,
    price: 55,
    image: '💨'
  }
]

export default function Events() {
  const [filterType, setFilterType] = useState<string>('all')

  const types = ['all', 'workshop', 'retreat', 'webinar', 'meetup']
  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(event => event.type === filterType)

  return (
    <div className="events">
      <section className="page-header">
        <h1>Events & Workshops</h1>
        <p>Join our community for transformative experiences</p>
      </section>

      <div className="events-container">
        {/* Event Type Filter */}
        <div className="event-filters">
          {types.map(type => (
            <button
              key={type}
              className={`filter-btn ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="events-list">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card fade-in">
              <div className="event-visual">
                <div className="event-image">{event.image}</div>
                <span className={`event-type-badge type-${event.type}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>

              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-info-grid">
                  <div className="info-item">
                    <span className="info-label">📅 Date</span>
                    <span className="info-value">{event.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">🕐 Time</span>
                    <span className="info-value">{event.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📍 Location</span>
                    <span className="info-value">{event.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👥 Attending</span>
                    <span className="info-value">{event.attendees} people</span>
                  </div>
                </div>

                <div className="event-footer">
                  {event.price > 0 ? (
                    <span className="event-price">${event.price}</span>
                  ) : (
                    <span className="event-price free">FREE</span>
                  )}
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Highlights */}
      <section className="highlights-section">
        <h2>This Month's Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">🎓</div>
            <h4>Expert Instructors</h4>
            <p>Learn from certified meditation and mindfulness experts with 10+ years of experience.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🌍</div>
            <h4>Global Community</h4>
            <p>Connect with peace lovers from around the world and share your experiences.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">💎</div>
            <h4>Premium Training</h4>
            <p>Access exclusive content and advanced training available only to event participants.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <h2>Don't See an Event You Like?</h2>
        <p>Suggest an event and we'll make it happen! Share your ideas with our community.</p>
        <button className="btn btn-primary btn-large">Suggest an Event</button>
      </section>
    </div>
  )
}
