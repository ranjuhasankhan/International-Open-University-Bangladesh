import './Faculties.css'

interface Faculty {
  name: string
  icon: string
  description: string
  programs: string[]
}

const faculties: Faculty[] = [
  {
    name: 'Science & Technology',
    icon: '🔬',
    description: 'Cutting-edge programs in computer science, information technology, and applied sciences.',
    programs: ['Computer Science', 'Information Technology', 'Physics', 'Chemistry', 'Mathematics']
  },
  {
    name: 'Medicine & Health Sciences',
    icon: '⚕️',
    description: 'Comprehensive healthcare education preparing the next generation of medical professionals.',
    programs: ['Medicine', 'Nursing', 'Public Health', 'Pharmacy', 'Medical Technology']
  },
  {
    name: 'Business & Management',
    icon: '💼',
    description: 'Executive education for business leaders and future entrepreneurs.',
    programs: ['MBA', 'BBA', 'Accounting', 'Finance', 'Entrepreneurship']
  },
  {
    name: 'Law & Justice',
    icon: '⚖️',
    description: 'Legal education focused on constitutional law, corporate law, and justice administration.',
    programs: ['Bachelor of Laws', 'Master of Laws', 'Constitutional Law', 'Corporate Law', 'Criminal Justice']
  },
  {
    name: 'Arts & Humanities',
    icon: '📚',
    description: 'Programs in literature, history, languages, and cultural studies.',
    programs: ['English Literature', 'History', 'Language Studies', 'Philosophy', 'Cultural Studies']
  },
  {
    name: 'Agriculture',
    icon: '🌾',
    description: 'Modern agricultural education for sustainable farming and rural development.',
    programs: ['Agronomy', 'Agricultural Economics', 'Plant Protection', 'Soil Science', 'Animal Husbandry']
  },
  {
    name: 'Engineering',
    icon: '🏗️',
    description: 'Technical excellence in civil, electrical, mechanical, and software engineering.',
    programs: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Software Engineering', 'Environmental Engineering']
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'Teacher training and educational leadership programs.',
    programs: ['B.Ed', 'M.Ed', 'Educational Management', 'Special Education', 'Curriculum Development']
  },
  {
    name: 'Islamic Studies',
    icon: '☪️',
    description: 'Islamic knowledge combined with contemporary perspectives and applications.',
    programs: ['Islamic Theology', 'Islamic Law', 'Islamic History', 'Islamic Philosophy', 'Comparative Religion']
  }
]

export default function Faculties() {
  return (
    <div className="faculties">
      <section className="page-header">
        <h1>Our Faculties</h1>
        <p>9 Diverse Faculties with 50+ Academic Programs</p>
      </section>

      <div className="faculties-container">
        <div className="faculties-list">
          {faculties.map((faculty, index) => (
            <div key={index} className="faculty-detail-card fade-in">
              <div className="faculty-header">
                <div className="faculty-icon">{faculty.icon}</div>
                <h2>{faculty.name}</h2>
              </div>
              <p className="faculty-description">{faculty.description}</p>
              <div className="programs-section">
                <h4>Featured Programs:</h4>
                <ul className="programs-list">
                  {faculty.programs.map((program, idx) => (
                    <li key={idx}>{program}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="admission-cta">
        <h2>Explore Our Programs</h2>
        <p>Choose a faculty that aligns with your passion and career goals</p>
        <a href="https://wa.me/8801839696587?text=I%20want%20to%20know%20more%20about%20programs" className="btn btn-primary">
          Get More Information
        </a>
      </section>
    </div>
  )
}
