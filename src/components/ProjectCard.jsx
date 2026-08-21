import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-type">{project.type}</p>
      </div>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.techStack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      <Link className="text-link" to={`/projects/${project.slug}`}>
        View details <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default ProjectCard
