import React from "react"
import "./contact-cta.css"

const ContactCTA = () => (
  <section className="contact-cta" aria-labelledby="cta-heading">
    <h2 id="cta-heading" className="cta-heading">Let's Work Together</h2>
    <p className="cta-copy">
      Have a project in mind? I'd love to hear about it.
    </p>
    <a
      href="mailto:franknardone95@gmail.com"
      className="cta-button"
      aria-label="Send email to start a project"
    >
      Get in Touch
    </a>
  </section>
)

export default ContactCTA
