import { useState } from 'react'
import './Admissions.css'

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    education: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nEducation: ${formData.education}\nMessage: ${formData.message}`
    window.open(`https://wa.me/8801839696587?text=${encodeURIComponent(whatsappMessage)}`)
  }

  return (
    <div className="admissions">
      <section className="page-header">
        <h1>Admissions</h1>
        <p>Join IOUB and Transform Your Future</p>
      </section>

      <div className="admissions-container">
        {/* Admission Process */}
        <section className="admission-process">
          <h2>Admission Process</h2>
          <div className="steps-grid">
            <div className="step-card fade-in">
              <div className="step-number">1</div>
              <h3>Research Programs</h3>
              <p>Explore our 50+ academic programs and find the right fit for your career goals.</p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">2</div>
              <h3>Check Eligibility</h3>
              <p>Review admission requirements for your chosen program and educational background.</p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">3</div>
              <h3>Submit Application</h3>
              <p>Complete the online application form with all required documents and information.</p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">4</div>
              <h3>Entrance Exam</h3>
              <p>Take our standardized entrance examination (if applicable for your program).</p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">5</div>
              <h3>Get Admitted</h3>
              <p>Receive your admission letter and begin your academic journey with IOUB.</p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="requirements">
          <h2>Admission Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <h3>🎓 Undergraduate</h3>
              <ul>
                <li>SSC/Equivalent qualification</li>
                <li>HSC/Equivalent qualification</li>
                <li>Good academic record</li>
                <li>English proficiency</li>
              </ul>
            </div>
            <div className="requirement-card">
              <h3>📚 Postgraduate</h3>
              <ul>
                <li>Bachelor's degree</li>
                <li>Minimum 2.5 GPA</li>
                <li>English proficiency test</li>
                <li>Statement of purpose</li>
              </ul>
            </div>
            <div className="requirement-card">
              <h3>🎯 PhD</h3>
              <ul>
                <li>Master's degree relevant field</li>
                <li>Research proposal</li>
                <li>Academic references</li>
                <li>Interview & evaluation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="application-form-section">
          <h2>Online Application Form</h2>
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXXXXXXXX"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program">Desired Program *</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a program</option>
                  <option value="Bachelor of Science">Bachelor of Science</option>
                  <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
                  <option value="Bachelor of Arts">Bachelor of Arts</option>
                  <option value="Master of Business Administration">Master of Business Administration</option>
                  <option value="Master of Science">Master of Science</option>
                  <option value="Doctor of Philosophy">Doctor of Philosophy</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="education">Current Education Level *</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select education level</option>
                  <option value="HSC/Intermediate">HSC/Intermediate</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Application via WhatsApp
            </button>
          </form>
        </section>

        {/* Important Dates */}
        <section className="important-dates">
          <h2>Important Dates</h2>
          <div className="dates-grid">
            <div className="date-item">
              <h4>Application Opens</h4>
              <p>January 1, 2025</p>
            </div>
            <div className="date-item">
              <h4>Application Deadline</h4>
              <p>August 31, 2025</p>
            </div>
            <div className="date-item">
              <h4>Entrance Exam</h4>
              <p>September 15-20, 2025</p>
            </div>
            <div className="date-item">
              <h4>Admission Results</h4>
              <p>October 1, 2025</p>
            </div>
            <div className="date-item">
              <h4>Fall Semester Starts</h4>
              <p>October 15, 2025</p>
            </div>
            <div className="date-item">
              <h4>Spring Semester Starts</h4>
              <p>February 1, 2026</p>
            </div>
          </div>
        </section>
      </div>

      <section className="contact-cta">
        <h2>Need Help?</h2>
        <p>Our admissions team is ready to assist you</p>
        <a href="https://wa.me/8801839696587?text=I%20have%20questions%20about%20admission" className="btn btn-primary">
          Contact Admissions Office
        </a>
      </section>
    </div>
  )
}
