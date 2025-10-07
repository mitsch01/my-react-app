import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PortfolioIndex from './pages/PortfolioIndex.jsx'
import PortfolioDetail from './pages/PortfolioDetail.jsx'
import WorkshopIndex from './pages/WorkshopIndex.jsx'
import WorkshopDetail from './pages/WorkshopDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/workshops" element={<WorkshopIndex />} />
            <Route path="/workshops/:slug" element={<WorkshopDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}