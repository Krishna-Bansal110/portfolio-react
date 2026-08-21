import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData.js'
import profilePicture from '../assets/profilepic.jpg'
import ProjectCard from '../components/ProjectCard.jsx'
import '../css/home.css'

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">B.Tech CSE · NIT Warangal</p>
            <h1>Hi, I&apos;m <span>Krishna Bansal.</span></h1>
            <p className="hero-intro">A third-year Computer Science student interested in building reliable backend systems and thoughtful full-stack experiences.</p>
            <div className="button-row">
              <Link className="button button-primary" to="/projects">Explore projects</Link>
              <Link className="button button-secondary" to="/contact">Get in touch</Link>
            </div>
          </div>
          <figure className="profile-picture">
            <img src={profilePicture} alt="Krishna Bansal" />
          </figure>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <div className="section-intro-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects with a practical focus.</h2>
            </div>
            <Link className="text-link" to="/projects">See all projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project) =>
                 <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
