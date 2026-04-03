import './Research.css'

const researchCenters = [
  {
    name: 'Advanced AI Research Center',
    icon: '🤖',
    description: 'Cutting-edge research in artificial intelligence, machine learning, and deep learning applications.',
    projects: ['AI Ethics', 'Natural Language Processing', 'Computer Vision', 'Robotics']
  },
  {
    name: 'Climate & Environmental Research',
    icon: '🌍',
    description: 'Studying climate change, environmental sustainability, and ecological conservation.',
    projects: ['Climate Modeling', 'Renewable Energy', 'Water Management', 'Biodiversity']
  },
  {
    name: 'Public Health Research',
    icon: '⚕️',
    description: 'Research focused on disease prevention, health policy, and community wellness.',
    projects: ['Epidemiology', 'Health Economics', 'Patient Care', 'Disease Control']
  },
  {
    name: 'Economics & Development',
    icon: '💹',
    description: 'Economic research for national development and poverty alleviation.',
    projects: ['Macroeconomics', 'Trade Policy', 'Development Economics', 'Finance']
  },
  {
    name: 'Islamic Studies Research',
    icon: '📖',
    description: 'Deep scholarly research in Islamic theology, history, and contemporary issues.',
    projects: ['Islamic Law', 'Islamic History', 'Islamic Philosophy', 'Contemporary Issues']
  },
  {
    name: 'Renewable Energy Center',
    icon: '⚡',
    description: 'Research in solar, wind, and sustainable energy solutions for Bangladesh.',
    projects: ['Solar Technology', 'Wind Energy', 'Biogas', 'Grid Management']
  }
]

export default function Research() {
  return (
    <div className="research">
      <section className="page-header">
        <h1>Research & Innovation</h1>
        <p>Leading Research Centers for Tomorrow's Solutions</p>
      </section>

      <div className="research-container">
        <section className="research-intro">
          <h2>Our Research Mission</h2>
          <p>
            IOUB is committed to advancing knowledge and creating innovative solutions to address 
            Bangladesh's most pressing challenges. Our research centers bring together faculty, students, 
            and industry partners to drive meaningful impact.
          </p>
        </section>

        <section className="research-centers">
          <h2>Research Centers</h2>
          <div className="centers-grid">
            {researchCenters.map((center, index) => (
              <div key={index} className="research-card fade-in">
                <div className="center-icon">{center.icon}</div>
                <h3>{center.name}</h3>
                <p className="description">{center.description}</p>
                <div className="projects">
                  <h4>Current Projects:</h4>
                  <ul>
                    {center.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="research-opportunities">
          <h2>Get Involved</h2>
          <div className="opportunities-grid">
            <div className="opportunity">
              <h3>🎓 Join as Researcher</h3>
              <p>Contribute to groundbreaking research and advance your academic career.</p>
            </div>
            <div className="opportunity">
              <h3>🤝 Industry Collaboration</h3>
              <p>Partner with IOUB for research projects and technology transfer.</p>
            </div>
            <div className="opportunity">
              <h3>💰 Funding & Grants</h3>
              <p>Apply for research grants and funding opportunities.</p>
            </div>
            <div className="opportunity">
              <h3>📚 Publishing</h3>
              <p>Publish your research in peer-reviewed international journals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
