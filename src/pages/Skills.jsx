import SectionHeading from '../components/SectionHeading.jsx'
import { skillGroups } from '../data/portfolioData.js'
import '../css/pages.css'

function Skills() {
  return (
    <section className="section page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools I use to bring ideas to life."
          text="A growing toolkit for building applications, working with data, and collaborating on code."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul className="tag-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
