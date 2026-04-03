import { useState } from 'react'
import './News.css'

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsItems = [
    {
      id: 1,
      title: 'IOUB Launches AI Research Center',
      category: 'announcement',
      date: 'December 15, 2024',
      emoji: '🤖',
      excerpt: 'International Open University Bangladesh inaugurates state-of-the-art Artificial Intelligence Research Center to advance cutting-edge AI and machine learning research.',
      content: 'Our new AI Research Center is equipped with advanced computing facilities and will focus on machine learning, neural networks, and real-world AI applications. Faculty and students can now collaborate on groundbreaking projects.'
    },
    {
      id: 2,
      title: 'IOUB Students Win National Hackathon',
      category: 'achievement',
      date: 'December 10, 2024',
      emoji: '🏆',
      excerpt: 'Team from IOUB CS Department wins first prize at Bangladesh National Hackathon 2024 with innovative healthcare solution.',
      content: 'Our brilliant students developed a mobile application for remote patient monitoring. This victory showcases the technical expertise and innovation fostered at IOUB.'
    },
    {
      id: 3,
      title: 'Spring Semester Admissions Open',
      category: 'admission',
      date: 'December 5, 2024',
      emoji: '📝',
      excerpt: 'Applications now open for Spring 2025 Semester. Early bird scholarship discounts available for first 500 applicants.',
      content: 'Join IOUB for the Spring 2025 semester. We are accepting applications for undergraduate, postgraduate, and PhD programs. Apply now and avail special early bird scholarships.'
    },
    {
      id: 4,
      title: 'International Faculty Exchange Program Launches',
      category: 'partnership',
      date: 'November 28, 2024',
      emoji: '🌍',
      excerpt: 'IOUB partners with universities in USA, UK, and Canada for faculty and student exchange programs starting 2025.',
      content: 'This initiative strengthens academic collaboration and provides exposure to international education standards. Faculty members can participate in research collaborations and students can pursue dual degrees.'
    },
    {
      id: 5,
      title: 'Campus Expansion Project Completed',
      category: 'news',
      date: 'November 20, 2024',
      emoji: '🏗️',
      excerpt: 'New Science and Technology Complex opens with 50 new labs and 10,000 new student capacity.',
      content: 'Our modern Science & Tech Complex features advanced research laboratories, collaborative workspaces, and state-of-the-art facilities. The campus has doubled its capacity and infrastructure.'
    },
    {
      id: 6,
      title: 'IOUB Hosts International Seminar on Climate Change',
      category: 'event',
      date: 'November 15, 2024',
      emoji: '🌱',
      excerpt: 'Leading climate scientists and environmental experts gather at IOUB for 3-day international seminar on sustainable development.',
      content: 'Scholars from around the world presented latest research on climate action, renewable energy, and environmental conservation. Students had opportunity to network with global experts.'
    },
    {
      id: 7,
      title: 'IOUB Football Team Wins Division Championship',
      category: 'achievement',
      date: 'November 10, 2024',
      emoji: '⚽',
      excerpt: 'IOUB sports team wins Inter-University Football Championship for second consecutive year.',
      content: 'Our dedicated athletes showcased excellent skills and teamwork. This victory strengthens IOUB presence in national sports arena. Congratulations to the team and coaching staff.'
    },
    {
      id: 8,
      title: 'New Scholarship Initiative for Rural Students',
      category: 'news',
      date: 'November 5, 2024',
      emoji: '🎓',
      excerpt: 'IOUB announces special scholarship program to provide 100% tuition coverage for underprivileged students from rural areas.',
      content: 'This initiative aims to promote educational equity and access. We are committed to supporting talented students regardless of their financial background. Apply through our admissions portal.'
    },
    {
      id: 9,
      title: 'IOUB Green Campus Initiative Launched',
      category: 'announcement',
      date: 'October 30, 2024',
      emoji: '♻️',
      excerpt: 'IOUB commits to becoming carbon-neutral by 2030 with comprehensive sustainability program.',
      content: 'Our Green Campus Initiative includes solar energy, rainwater harvesting, organic gardens, and waste reduction programs. Students can participate in environmental projects and sustainability research.'
    }
  ]

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'announcement', label: 'Announcements' },
    { value: 'event', label: 'Events' },
    { value: 'achievement', label: 'Achievements' },
    { value: 'admission', label: 'Admissions' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'news', label: 'News' }
  ]

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  return (
    <div className="news">
      <section className="page-header">
        <h1>News & Events</h1>
        <p>Stay Updated with Latest News from IOUB</p>
      </section>

      <div className="news-container">
        {/* Category Filter */}
        <div className="category-filter">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-emoji">{item.emoji}</div>
                <div className="news-category">{item.category}</div>
                <div className="news-date">📅 {item.date}</div>
                <h3>{item.title}</h3>
                <p className="excerpt">{item.excerpt}</p>
                <p className="content">{item.content}</p>
                <button className="read-more">Read More →</button>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No news found in this category.</p>
            </div>
          )}
        </div>

        {/* Subscribe Section */}
        <section className="subscribe-section">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter to get latest news, events, and announcements delivered to your inbox.</p>
          <form className="subscribe-form" onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for subscribing!')
          }}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </section>

        {/* Events Calendar */}
        <section className="events-calendar">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Dec 2024</span>
              </div>
              <div className="event-details">
                <h4>Winter Semester Begins</h4>
                <p>All academic and professional programs commence for winter session.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">20</span>
                <span className="month">Dec 2024</span>
              </div>
              <div className="event-details">
                <h4>Annual Sports Day</h4>
                <p>Inter-department sports competition and celebration.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">01</span>
                <span className="month">Jan 2025</span>
              </div>
              <div className="event-details">
                <h4>New Year Celebration</h4>
                <p>Campus festive celebrations and cultural programs.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Jan 2025</span>
              </div>
              <div className="event-details">
                <h4>Research Conference 2025</h4>
                <p>International conference showcasing faculty and student research.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">01</span>
                <span className="month">Feb 2025</span>
              </div>
              <div className="event-details">
                <h4>Spring Semester Begins</h4>
                <p>Spring 2025 semester commences for all programs.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="day">20</span>
                <span className="month">Feb 2025</span>
              </div>
              <div className="event-details">
                <h4>Alumni Meet & Greet</h4>
                <p>Network with IOUB alumni and celebrate achievements.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
