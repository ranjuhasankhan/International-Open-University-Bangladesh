import { useState } from 'react'
import './Blog.css'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  category: string
  image: string
}

const blogArticles: Article[] = [
  {
    id: 1,
    title: 'The Science Behind Meditation and Brain Health',
    excerpt: 'Discover how regular meditation can literally change your brain structure and improve cognitive function...',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2025',
    readTime: 8,
    category: 'Science',
    image: '🧠'
  },
  {
    id: 2,
    title: '7 Simple Ways to Start Your Meditation Journey',
    excerpt: 'New to meditation? Here are seven practical tips to help you begin your practice with confidence...',
    author: 'James Wilson',
    date: 'March 10, 2025',
    readTime: 5,
    category: 'Beginner Guide',
    image: '🌱'
  },
  {
    id: 3,
    title: 'Mindfulness in Daily Life: Beyond the Meditation Cushion',
    excerpt: 'Learn how to bring mindfulness into your everyday activities and transform your daily experience...',
    author: 'Emma Thompson',
    date: 'March 5, 2025',
    readTime: 10,
    category: 'Lifestyle',
    image: '🌟'
  },
  {
    id: 4,
    title: 'The Breath: Your Gateway to Inner Peace',
    excerpt: 'Explore the power of breathing techniques and how conscious breathing can calm your nervous system...',
    author: 'Michael Davis',
    date: 'February 28, 2025',
    readTime: 7,
    category: 'Techniques',
    image: '💨'
  },
  {
    id: 5,
    title: 'Building a Meditation Community',
    excerpt: 'How to create and nurture a supportive meditation group in your local area...',
    author: 'Lisa Anderson',
    date: 'February 22, 2025',
    readTime: 6,
    category: 'Community',
    image: '👥'
  },
  {
    id: 6,
    title: 'Meditation for Stress Relief: Evidence-Based Strategies',
    excerpt: 'Scientific approaches to using meditation as an effective tool for managing stress and anxiety...',
    author: 'Dr. Mark Johnson',
    date: 'February 15, 2025',
    readTime: 9,
    category: 'Wellness',
    image: '😌'
  }
]

export default function Blog() {
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = ['all', ...new Set(blogArticles.map(a => a.category))]

  let filteredArticles = blogArticles.filter(article => {
    const categoryMatch = filterCategory === 'all' || article.category === filterCategory
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className="blog">
      <section className="page-header">
        <h1>Blog & Articles</h1>
        <p>Insights, tips, and stories from our peace community</p>
      </section>

      <div className="blog-container">
        {/* Search and Filter */}
        <div className="blog-controls">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${filterCategory === cat ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat)}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <article key={article.id} className="article-card fade-in">
                <div className="article-image">{article.image}</div>
                
                <div className="article-header">
                  <h3 className="article-title">{article.title}</h3>
                  <span className="article-category">{article.category}</span>
                </div>

                <p className="article-excerpt">{article.excerpt}</p>

                <div className="article-meta">
                  <span className="article-author">👤 {article.author}</span>
                  <span className="article-date">📅 {article.date}</span>
                  <span className="article-read-time">⏱️ {article.readTime} min read</span>
                </div>

                <button className="article-read-btn">Read More</button>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No articles found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Section */}
      <section className="featured-section">
        <h2>Featured Article</h2>
        <div className="featured-article">
          <div className="featured-image">🌸</div>
          <div className="featured-content">
            <p className="featured-tag">MUST READ</p>
            <h3>The Transformative Power of Consistent Meditation Practice</h3>
            <p>
              This comprehensive guide explores real-world transformations from people who have committed 
              to daily meditation. Learn from their experiences and discover how you too can experience 
              profound changes in your life.
            </p>
            <p className="featured-author">By Dr. Robert Chen • Published on March 20, 2025</p>
            <button className="btn btn-primary">Read Full Article</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest articles and meditation tips delivered to your inbox weekly</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  )
}
