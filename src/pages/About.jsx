import SectionHeading from '../components/SectionHeading.jsx'
import '../css/pages.css'

function About() {
  return (
    <section className="section page-section">
      <div className="container narrow-container">
        <SectionHeading
          eyebrow="About me"
          title="Learning by building useful software."
          text="I am Krishna Bansal, a third-year B.Tech Computer Science and Engineering student at NIT Warangal."
        />
        <div className="about-content">
          <p>I enjoy turning a problem into a clear, working system. My interests range from backend development and full-stack applications to data structures, algorithms, and system design.</p>
          <p>Through projects, I focus on strengthening my fundamentals while creating software that is practical, maintainable, and easy for people to use.</p>
        </div>
      </div>
    </section>
  )
}

export default About
