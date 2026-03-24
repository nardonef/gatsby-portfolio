import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactCTA from "../components/contact-cta"
import "./services.css"

const services = [
  {
    title: "iOS & Mobile Apps",
    description:
      "Native iOS development with SwiftUI. From concept to App Store, building performant mobile experiences with clean architecture and modern Apple frameworks.",
  },
  {
    title: "Web Applications",
    description:
      "Full-stack web apps and platforms. React, Node.js, and cloud infrastructure for products that scale from prototype to production.",
  },
  {
    title: "AI Integration & Enablement",
    description:
      "Adding AI capabilities to existing or new products. LLM integration, intelligent features, and workflow automation that deliver real user value.",
  },
  {
    title: "Website Design & Development",
    description:
      "Marketing sites, portfolios, and landing pages. Fast, accessible, and designed to convert — built with modern web standards.",
  },
]

const testimonials = [
  {
    quote: "Placeholder testimonial — replace with a real client quote.",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "Placeholder testimonial — replace with a real client quote.",
    name: "Client Name",
    role: "Title, Company",
  },
]

const Services = ({ location }) => (
  <Layout location={location}>
    <SEO title="Services" />
    <main className="services-page">
      <section className="services-intro" aria-labelledby="services-title">
        <h1 id="services-title" className="services-title">Services</h1>
        <p className="services-subtitle">
          Design and development for teams that need to ship.
        </p>
      </section>

      <section className="services-grid" aria-label="Service offerings">
        {services.map(s => (
          <div key={s.title} className="service-card">
            <h2 className="service-card-title">{s.title}</h2>
            <p className="service-card-description">{s.description}</p>
            <a
              href="mailto:franknardone95@gmail.com"
              className="service-card-cta"
              aria-label={`Inquire about ${s.title}`}
            >
              Get in Touch &rarr;
            </a>
          </div>
        ))}
      </section>

      {/* Testimonials — uncomment and add real quotes when ready
      <section
        className="testimonials-section"
        aria-labelledby="testimonials-title"
      >
        <h2 id="testimonials-title" className="testimonials-title">
          What Clients Say
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-attribution">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      */}
    </main>
    <ContactCTA />
  </Layout>
)

export default Services
