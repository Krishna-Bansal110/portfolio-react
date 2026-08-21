import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolioData.js'
import '../css/pages.css'

function ProjectDetails() {
  const { projectSlug } = useParams()
  const project = projects.find((item) => item.slug === projectSlug)

  if (!project) {
    return (
      <section className="section page-section">
        <div className="container empty-state">
          <p className="eyebrow">Project not found</p>
          <h1>That project does not exist.</h1>
          <Link className="button button-primary" to="/projects">Back to projects</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-section">
      <div className="container narrow-container">
        <Link className="back-link" to="/projects">← Back to projects</Link>
        <article className="project-detail">
          <div className="project-card-top">
            <p className="project-type">{project.type}</p>
          </div>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          {project.inDevelopment && <p className="notice">This project is currently in development.</p>}

          <div className="detail-grid">
            <section>
              <h2>Tech stack</h2>
              <ul className="tag-list">
                {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </section>
            <section>
              <h2>Project goal</h2>
              <p>{project.goal}</p>
            </section>
          </div>

          <section className="detail-list-section">
            <h2>{project.slug === 'mall-management-system' ? 'Modules' : 'Key areas'}</h2>
            <ul className="feature-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>

          {project.concepts && (
            <section className="detail-list-section">
              <h2>Concepts used</h2>
              <ul className="tag-list">
                {project.concepts.map((concept) => <li key={concept}>{concept}</li>)}
              </ul>
            </section>
          )}
        </article>
      </div>
    </section>
  )
}

export default ProjectDetails
