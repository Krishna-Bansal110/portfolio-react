import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import '../css/layout.css'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function Header({ theme, onThemeToggle }) {
  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink className="brand" to="/" aria-label="Krishna Bansal home page">
          KB<span>.</span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              key={link.to}
              to={link.to}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle theme={theme} onThemeToggle={onThemeToggle} />
      </div>
    </header>
  )
}

export default Header
