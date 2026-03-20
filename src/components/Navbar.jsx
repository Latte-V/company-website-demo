import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.svg" alt="小微AI科技" className="logo-img" />
          <span className="logo-text">小微AI科技</span>
        </Link>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              首页
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className={`navbar-link ${isActive('/products') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              产品
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              联系我们
            </Link>
          </li>
          <li className="navbar-cta">
            <Link to="/contact" className="cta-nav-btn" onClick={closeMenu}>
              免费试用
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
