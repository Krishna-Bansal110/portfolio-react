import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>{new Date().getFullYear()} Krishna Bansal. Built with React.</p>
        <Link to="/contact">Let&apos;s connect</Link>
      </div>
    </footer>
  )
}

export default Footer
