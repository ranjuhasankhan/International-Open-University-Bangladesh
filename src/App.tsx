import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Faculties from './pages/Faculties'
import Admissions from './pages/Admissions'
import CampusLife from './pages/CampusLife'
import Research from './pages/Research'
import Facilities from './pages/Facilities'
import FeesScholarships from './pages/FeesScholarships'
import News from './pages/News'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus" element={<CampusLife />} />
            <Route path="/research" element={<Research />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/fees-scholarships" element={<FeesScholarships />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
