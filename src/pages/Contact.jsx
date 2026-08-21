import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import '../css/pages.css'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section className="section page-section">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something useful."
            text="Have a question, an opportunity, or simply want to connect? Send me a message."
          />
          <p className="contact-note">This form is a front-end demo and will show a confirmation after submission.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />

          <button className="button button-primary" type="submit">Send message</button>
          {isSubmitted && <p className="form-success" role="status">Thanks! Your message has been noted.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
