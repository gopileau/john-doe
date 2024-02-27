import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './styles.css';



import Home from './pages/Home';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Notices from './pages/Notices';

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    function handleScroll() {
      const backToTopButton = document.getElementById('backToTop');
      if (backToTopButton) {
        if (window.scrollY > 100) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      }
    }
  
    function handleInitialScroll() {

      const backToTopButton = document.getElementById('backToTop');
      if (backToTopButton) {
        if (window.scrollY > 100) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    handleInitialScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <header>
        <div className={`App ${location.pathname === '/Services' ? 'on-services-page' : ''}`}>
          <nav className={`nav navbar navbar-expand-lg ${isExpanded ? 'expanded' : ''}`} id="mainNav">
          <Link className="navbar-brand" to="/" id="favicon-link">
              <img src="/favicon.ico" alt="Favicon" className="favicon-img" />
          </Link>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
              <span className="navbar-toggler-icon-bar"></span>
              <span className="navbar-toggler-icon-bar"></span>
              <span className="navbar-toggler-icon-bar"></span>
            </button>
            <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/" onClick={handleLinkClick} className="nav-link">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/Services" onClick={handleLinkClick} className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/Achievements" onClick={handleLinkClick} className="nav-link">
                    Realisations
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/Blog" onClick={handleLinkClick} className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/contact" onClick={handleLinkClick} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link to="/Notices" onClick={handleLinkClick} className="nav-link">
                    Mentions legales
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Notices" element={<Notices />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </div>
      </header>

      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h4>Jhon Doe</h4>
            <p>Reims</p>
            <p>xx xx xx xxx</p>
            <div className="social-icons">
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    <div className="footer-column">
      <h4>Pages</h4>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Notices">Mentions Legales</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Dernières réalisations</h4>
      <ul>
      <li><Link to="/Achievements">Realisations</Link></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Derniers articles de blog</h4>
      <ul>
      <li><Link to="/Blog">Blog</Link></li>
      </ul>
    </div>
     </div>
      <div className="footer-bottom">
          <div className="copyright">&copy; {new Date().getFullYear()} John Doe</div>
          <div className="back-to-top" id="backToTop">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Haut de page</a>
          </div>
        </div>
</footer>

   </div>
  );
}











