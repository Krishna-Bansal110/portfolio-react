import Footer from './Footer.jsx'
import Header from './Header.jsx'

function SiteLayout({ theme, onThemeToggle, children }) {
  return (
    <div className="site-shell">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
