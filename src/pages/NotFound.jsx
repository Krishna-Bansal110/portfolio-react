import { Link } from 'react-router-dom'
import '../css/pages.css'

function NotFound() {
  return (
    <section className="section page-section">
      <div className="container empty-state">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for is not available.</p>
        <Link className="button button-primary" to="/">Go home</Link>
      </div>
    </section>
  )
}

export default NotFound
