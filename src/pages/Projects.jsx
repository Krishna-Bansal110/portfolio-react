import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/portfolioData.js'
import '../css/pages.css'

function Projects() {
  return (
    <section className="section page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Building systems with purpose."
          text="A selection of projects spanning web development, object-oriented design, and ongoing quantitative research."
        />
        <div className="project-grid project-grid-large">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
