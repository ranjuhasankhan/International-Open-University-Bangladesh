import { useState } from 'react'
import './MeditationHub.css'

interface Session {
  id: number
  title: string
  duration: number
  level: 'beginner' | 'intermediate' | 'advanced'
  category: string
  description: string
  instructor: string
}

const sessions: Session[] = [
  {
    id: 1,
    title: 'Morning Mindfulness',
    duration: 10,
    level: 'beginner',
    category: 'Focus',
    description: 'Start your day with calm and clarity',
    instructor: 'Sarah Chen'
  },
  {
    id: 2,
    title: 'Deep Relaxation',
    duration: 20,
    level: 'intermediate',
    category: 'Relaxation',
    description: 'Release stress and tension from your body',
    instructor: 'James Wilson'
  },
  {
    id: 3,
    title: 'Breath Awareness',
    duration: 15,
    level: 'beginner',
    category: 'Breathing',
    description: 'Master the fundamentals of breathing',
    instructor: 'Emma Thompson'
  },
  {
    id: 4,
    title: 'Loving Kindness',
    duration: 25,
    level: 'intermediate',
    category: 'Compassion',
    description: 'Cultivate love and compassion for yourself and others',
    instructor: 'Michael Davis'
  },
  {
    id: 5,
    title: 'Advanced Body Scan',
    duration: 30,
    level: 'advanced',
    category: 'Body Awareness',
    description: 'Deep exploration of bodily sensations',
    instructor: 'Dr. Lisa Anderson'
  },
  {
    id: 6,
    title: 'Sleep & Relaxation',
    duration: 35,
    level: 'beginner',
    category: 'Sleep',
    description: 'Prepare your mind and body for restful sleep',
    instructor: 'Grace Martinez'
  }
]

export default function MeditationHub() {
  const [filterLevel, setFilterLevel] = useState<string>('all')
  const [filterCategory, setFilterCategory] = useState<string>('all')

  const filteredSessions = sessions.filter(session => {
    const levelMatch = filterLevel === 'all' || session.level === filterLevel
    const categoryMatch = filterCategory === 'all' || session.category === filterCategory
    return levelMatch && categoryMatch
  })

  const categories = ['all', ...new Set(sessions.map(s => s.category))]
  const levels = ['all', 'beginner', 'intermediate', 'advanced']

  return (
    <div className="meditation-hub">
      <section className="page-header">
        <h1>Meditation Hub</h1>
        <p>Explore guided meditation sessions for all levels</p>
      </section>

      <div className="hub-container">
        {/* Filters */}
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>Level</h3>
            <div className="filter-options">
              {levels.map(level => (
                <label key={level} className="filter-label">
                  <input
                    type="radio"
                    name="level"
                    value={level}
                    checked={filterLevel === level}
                    onChange={(e) => setFilterLevel(e.target.value)}
                  />
                  <span className="capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Category</h3>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category} className="filter-label">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filterCategory === category}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  />
                  <span className="capitalize">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Sessions Grid */}
        <main className="sessions-grid">
          {filteredSessions.length > 0 ? (
            filteredSessions.map(session => (
              <div key={session.id} className="session-card fade-in">
                <div className="session-header">
                  <h3>{session.title}</h3>
                  <span className={`level-badge level-${session.level}`}>
                    {session.level}
                  </span>
                </div>
                
                <p className="session-category">{session.category}</p>
                <p className="session-description">{session.description}</p>
                
                <div className="session-info">
                  <span>⏱️ {session.duration} min</span>
                  <span>👤 {session.instructor}</span>
                </div>

                <button className="btn btn-secondary">Start Session</button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No sessions match your filters. Try adjusting your selections.</p>
            </div>
          )}
        </main>
      </div>

      {/* Getting Started Section */}
      <section className="getting-started">
        <h2>Getting Started with Meditation</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-number">1</div>
            <h4>Choose Your Session</h4>
            <p>Select a meditation session based on your level and what you need today.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">2</div>
            <h4>Find a Quiet Space</h4>
            <p>Sit comfortably in a quiet location where you won't be disturbed.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">3</div>
            <h4>Follow Along</h4>
            <p>Listen to the guided instructions and let yourself relax into the experience.</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">4</div>
            <h4>Practice Regularly</h4>
            <p>Consistency is key - practice daily for the best results.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
