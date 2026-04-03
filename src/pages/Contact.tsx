import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.location.href = `https://wa.me/8801839696587?text=${encodedMessage}`
  }

  return (
    <div className="contact">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in Touch with International Open University Bangladesh</p>
      </section>

      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Location</h3>
                <p>Sirajganj, Dhaka</p>
                <p className="info-subtitle">International Open University Bangladesh</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p><a href="tel:+8801839696587">+880 1839696587</a></p>
                <p className="info-subtitle">Available Monday-Friday, 9 AM - 6 PM</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p><a href="mailto:ranjuhasankhan@gmail.com">ranjuhasankhan@gmail.com</a></p>
                <p className="info-subtitle">We respond within 24 hours</p>
              </div>

              <div className="info-card">
                <div className="info-icon">💬</div>
                <h3>WhatsApp</h3>
                <p><a href="https://wa.me/8801839696587" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
                <p className="info-subtitle">Instant support available</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
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
                    placeholder="your@email.com"
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
                    placeholder="+880 1XXX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Admissions Inquiry">Admissions Inquiry</option>
                  <option value="Scholarship Information">Scholarship Information</option>
                  <option value="Program Information">Program Information</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message via WhatsApp</button>
            </form>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="contact-sidebar">
          <div className="sidebar-section">
            <h3>Office Hours</h3>
            <ul>
              <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/#/admissions">Apply Now</a></li>
              <li><a href="/#/fees-scholarships">Fees & Scholarships</a></li>
              <li><a href="/#/faculties">Explore Programs</a></li>
              <li><a href="/#/about">About IOUB</a></li>
              <li><a href="/#/research">Research Centers</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Leadership</h3>
            <div className="leadership-card">
              <h4>Founder & Chancellor</h4>
              <p className="name">Hamza Hasan Adnan</p>
              <p>Vision: Making world-class education accessible to everyone</p>
            </div>
          </div>

          <div className="sidebar-section social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" title="Facebook">👨‍💼 Facebook</a>
              <a href="#" title="Twitter">🐦 Twitter</a>
              <a href="#" title="LinkedIn">💼 LinkedIn</a>
              <a href="#" title="Instagram">📸 Instagram</a>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>❓ How do I apply to IOUB?</h4>
            <p>Visit our <a href="/#/admissions">Admissions page</a> to fill out the application form. You can apply for undergraduate, postgraduate, or PhD programs. Early bird scholarships are available for the first 500 applicants each semester.</p>
          </div>

          <div className="faq-item">
            <h4>💰 What are the fee structures?</h4>
            <p>Undergraduate programs cost ৳25,000 per semester, postgraduate ৳35,000, and PhD ৳45,000. Visit our <a href="/#/fees-scholarships">Fees & Scholarships page</a> for detailed breakdown and available scholarships.</p>
          </div>

          <div className="faq-item">
            <h4>🎓 What programs are available?</h4>
            <p>IOUB offers 50+ programs across 9 faculties including Science & Technology, Medicine, Business, Law, Arts, Agriculture, Engineering, Education, and Islamic Studies.</p>
          </div>

          <div className="faq-item">
            <h4>📚 Can I get a scholarship?</h4>
            <p>Yes! We offer merit-based, need-based, performance, women empowerment, and sports scholarships covering 40-75% tuition. Check eligibility criteria on our <a href="/#/fees-scholarships">Fees & Scholarships page</a>.</p>
          </div>

          <div className="faq-item">
            <h4>🏢 What facilities does IOUB provide?</h4>
            <p>IOUB has modern library, science labs, computer labs, hostels, mosque, cafeteria, sports facilities, transport, medical center, and more. Explore our <a href="/#/facilities">Facilities page</a>.</p>
          </div>

          <div className="faq-item">
            <h4>🔍 How can I learn about research opportunities?</h4>
            <p>IOUB has 6 research centers focusing on AI, climate, public health, economics, Islamic studies, and renewable energy. Visit our <a href="/#/research">Research page</a> to get involved.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Future?</h2>
        <p>Join thousands of students at IOUB and pursue excellence in education</p>
        <a href="/#/admissions" className="btn btn-primary btn-large">Start Your Journey</a>
      </section>
    </div>
  )
}
