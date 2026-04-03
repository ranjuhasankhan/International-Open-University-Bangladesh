import { useState } from 'react'
import './CommunityForum.css'

interface Post {
  id: number
  author: string
  avatar: string
  title: string
  content: string
  category: string
  replies: number
  views: number
  likes: number
  timestamp: string
}

const forumPosts: Post[] = [
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: '👩',
    title: 'How to maintain daily meditation practice?',
    content: 'I struggle with consistency. What tips do you all have for building a sustainable daily meditation routine?',
    category: 'Tips & Advice',
    replies: 24,
    views: 156,
    likes: 42,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    author: 'James Wilson',
    avatar: '👨',
    title: 'Benefits of morning meditation',
    content: 'Starting my day with 15 minutes of meditation has transformed my entire outlook. Sharing my experience and would love to hear yours!',
    category: 'Experiences',
    replies: 18,
    views: 203,
    likes: 67,
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    author: 'Emma Thompson',
    avatar: '👩',
    title: 'Dealing with racing thoughts during meditation',
    content: 'My mind keeps wandering. Is it normal? How do I handle this without getting frustrated?',
    category: 'Questions',
    replies: 31,
    views: 289,
    likes: 55,
    timestamp: '6 hours ago'
  },
  {
    id: 4,
    author: 'Michael Davis',
    avatar: '👨',
    title: 'Meditation retreat coming up!',
    content: 'Excited to announce a 7-day meditation and mindfulness retreat happening next month. Who is interested?',
    category: 'Events',
    replies: 14,
    views: 98,
    likes: 38,
    timestamp: '1 day ago'
  },
  {
    id: 5,
    author: 'Lisa Anderson',
    avatar: '👩',
    title: 'Creating a meditation group in my community',
    content: 'Starting a local meditation group and looking for advice on how to get it off the ground.',
    category: 'Community',
    replies: 12,
    views: 145,
    likes: 29,
    timestamp: '1 day ago'
  }
]

export default function CommunityForum() {
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('recent')

  const categories = ['all', 'Tips & Advice', 'Experiences', 'Questions', 'Events', 'Community']

  let filteredPosts = filterCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === filterCategory)

  if (sortBy === 'popular') {
    filteredPosts = [...filteredPosts].sort((a, b) => b.views - a.views)
  } else if (sortBy === 'trending') {
    filteredPosts = [...filteredPosts].sort((a, b) => b.likes - a.likes)
  }

  return (
    <div className="community-forum">
      <section className="page-header">
        <h1>Community Forum</h1>
        <p>Connect with fellow peace lovers and share your journey</p>
      </section>

      <div className="forum-container">
        <div className="forum-header">
          <button className="btn btn-primary">Create New Post</button>
          
          <div className="forum-controls">
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
              aria-label="Filter posts by category"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
              aria-label="Sort posts by"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Viewed</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Forum Posts */}
        <div className="forum-posts">
          {filteredPosts.map(post => (
            <div key={post.id} className="forum-post fade-in">
              <div className="post-avatar">
                <span className="avatar-icon">{post.avatar}</span>
              </div>

              <div className="post-content">
                <div className="post-header">
                  <h3 className="post-title">{post.title}</h3>
                  <span className={`post-category category-${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.category}
                  </span>
                </div>

                <p className="post-author">
                  by <strong>{post.author}</strong> • {post.timestamp}
                </p>

                <p className="post-body">{post.content}</p>

                <div className="post-stats">
                  <span>💬 {post.replies} replies</span>
                  <span>👁️ {post.views} views</span>
                  <span>❤️ {post.likes} likes</span>
                </div>
              </div>

              <button className="post-action-btn">→</button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <section className="community-guidelines">
        <h2>Community Guidelines</h2>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <div className="guideline-icon">🤝</div>
            <h4>Be Respectful</h4>
            <p>Treat all members with kindness and respect, regardless of their beliefs or experiences.</p>
          </div>
          <div className="guideline-card">
            <div className="guideline-icon">🙅</div>
            <h4>No Spam</h4>
            <p>Keep discussions meaningful. Avoid promotional content and self-promotion.</p>
          </div>
          <div className="guideline-card">
            <div className="guideline-icon">🛡️</div>
            <h4>Privacy First</h4>
            <p>Never share personal information about others without consent.</p>
          </div>
          <div className="guideline-card">
            <div className="guideline-icon">💭</div>
            <h4>Open Mind</h4>
            <p>Be open to different perspectives and approaches to peace and mindfulness.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
