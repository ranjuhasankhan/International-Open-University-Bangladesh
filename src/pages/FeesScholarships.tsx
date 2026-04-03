import './FeesScholarships.css'

export default function FeesScholarships() {
  return (
    <div className="fees-scholarships">
      <section className="page-header">
        <h1>Fees & Scholarships</h1>
        <p>Affordable Education with Multiple Financial Support Options</p>
      </section>

      <div className="fees-container">
        {/* Fee Structure */}
        <section className="fee-structure">
          <h2>Fee Structure (Per Semester)</h2>
          <div className="fees-grid">
            <div className="fee-card fade-in">
              <h3>Undergraduate Programs</h3>
              <div className="fee-amount">৳25,000</div>
              <ul className="fee-includes">
                <li>Tuition and course materials</li>
                <li>Access to all facilities</li>
                <li>Library and digital resources</li>
                <li>Student support services</li>
                <li>Regular assessments</li>
              </ul>
              <button className="btn btn-primary">Enroll Now</button>
            </div>

            <div className="fee-card fade-in">
              <h3>Postgraduate Programs</h3>
              <div className="fee-amount">৳35,000</div>
              <ul className="fee-includes">
                <li>Advanced curriculum</li>
                <li>Research mentorship</li>
                <li>Thesis/dissertation support</li>
                <li>Industry collaborations</li>
                <li>Career services</li>
              </ul>
              <button className="btn btn-primary">Enroll Now</button>
            </div>

            <div className="fee-card fade-in">
              <h3>PhD Programs</h3>
              <div className="fee-amount">৳45,000</div>
              <ul className="fee-includes">
                <li>Advanced research facilities</li>
                <li>Dedicated supervision</li>
                <li>Publication support</li>
                <li>International collaborations</li>
                <li>Full campus privileges</li>
              </ul>
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </section>

        {/* Scholarship Programs */}
        <section className="scholarships">
          <h2>Scholarship Programs</h2>
          <p>IOUB offers diverse scholarship opportunities to ensure no deserving student is left behind.</p>
          
          <div className="scholarships-grid">
            <div className="scholarship-card">
              <h3>🏆 Merit Scholarship</h3>
              <p className="amount">Up to 75% Tuition Coverage</p>
              <p>For academically outstanding students with excellent academic records and entrance exam scores.</p>
              <ul>
                <li>SSC GPA ≥ 3.5</li>
                <li>HSC GPA ≥ 3.5</li>
                <li>Interview required</li>
              </ul>
            </div>

            <div className="scholarship-card">
              <h3>💰 Need-Based Scholarship</h3>
              <p className="amount">Up to 50% Tuition Coverage</p>
              <p>Financial assistance for deserving students from lower income backgrounds.</p>
              <ul>
                <li>Family income evaluation</li>
                <li>Academic merit considered</li>
                <li>Annual renewal based on performance</li>
              </ul>
            </div>

            <div className="scholarship-card">
              <h3>🎯 Performance Scholarship</h3>
              <p className="amount">Up to 60% Tuition Coverage</p>
              <p>Based on consistent academic performance and achievement in examinations.</p>
              <ul>
                <li>Semester GPA ≥ 3.8</li>
                <li>Renewable each semester</li>
                <li>No income limitation</li>
              </ul>
            </div>

            <div className="scholarship-card">
              <h3>👩‍🎓 Women Empowerment</h3>
              <p className="amount">Up to 40% Tuition Coverage</p>
              <p>Special scholarship for female students pursuing higher education.</p>
              <ul>
                <li>Female students only</li>
                <li>Merit-based selection</li>
                <li>Special support services</li>
              </ul>
            </div>

            <div className="scholarship-card">
              <h3>🌍 Minorities Scholarship</h3>
              <p className="amount">Up to 50% Tuition Coverage</p>
              <p>Supporting students from minority backgrounds and underrepresented communities.</p>
              <ul>
                <li>Minority background required</li>
                <li>Academic merit evaluated</li>
                <li>Community integration programs</li>
              </ul>
            </div>

            <div className="scholarship-card">
              <h3>🎨 Excellence in Sports</h3>
              <p className="amount">Up to 75% Tuition Coverage</p>
              <p>Athletic scholarships for students excelling in sports and academics.</p>
              <ul>
                <li>National level sports achievement</li>
                <li>Academic requirement: GPA ≥ 3.0</li>
                <li>Training and coaching support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="payment-options">
          <h2>Payment Flexibility</h2>
          <div className="options-grid">
            <div className="option">
              <h3>Semester Payment</h3>
              <p>Pay per semester with flexible timing options.</p>
            </div>
            <div className="option">
              <h3>Monthly Installments</h3>
              <p>Divide fees into manageable monthly payments (0% interest).</p>
            </div>
            <div className="option">
              <h3>Discounts</h3>
              <p>Early payment discount or sibling discounts available.</p>
            </div>
            <div className="option">
              <h3>Financial Aid</h3>
              <p>Student loans and financial assistance programs available.</p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="scholarship-application">
          <h2>How to Apply for Scholarships</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Submit Application</h4>
              <p>Complete the IOUB application form with your academic records</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Submit Documents</h4>
              <p>Provide required documents and proof of eligibility</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Merit Evaluation</h4>
              <p>Scholarship committee reviews applications and merit</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Interview (if applicable)</h4>
              <p>Shortlisted candidates attend interviews</p>
            </div>
            <div className="step">
              <span className="step-number">5</span>
              <h4>Award & Notification</h4>
              <p>Scholarship awards announced and recipients notified</p>
            </div>
          </div>
        </section>

        {/* Contact Scholarship Office */}
        <section className="scholarship-contact">
          <h2>Scholarship Inquiries</h2>
          <p>Have questions about fees or scholarships?</p>
          <a href="https://wa.me/8801839696587?text=I%20want%20to%20know%20about%20scholarships" className="btn btn-primary">
            Contact Scholarship Office
          </a>
        </section>
      </div>
    </div>
  )
}
