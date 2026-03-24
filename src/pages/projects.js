import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ContactCTA from "../components/contact-cta"
import "./projects.css"
import { graphql, useStaticQuery } from "gatsby"

const Projects = ({location}) => {
  const data = useStaticQuery(graphql`
    query {
      dashboard: file(relativePath: { eq: "fantasy-hub/01_dashboard.png" }) {
        ...squareImage
      }
      analytics: file(relativePath: { eq: "fantasy-hub/02_analytics.png" }) {
        ...squareImage
      }
      standings: file(relativePath: { eq: "fantasy-hub/04_standings_detail.png" }) {
        ...squareImage
      }
      dashboardScrolled: file(relativePath: { eq: "fantasy-hub/09_dashboard_scrolled.png" }) {
        ...squareImage
      }
      aptihealth: file(relativePath: { eq: "clients/aptihealth.png" }) {
        ...squareImage
      }
      youversion: file(relativePath: { eq: "clients/youversion.jpg" }) {
        ...squareImage
      }
      zones: file(relativePath: { eq: "clients/zones.png" }) {
        ...squareImage
      }
      forthealth: file(relativePath: { eq: "clients/forthealth.png" }) {
        ...squareImage
      }
    }
  `)

  const fantasyScreenshots = [
    { image: data.dashboard, alt: "Fantasy League Hub dashboard" },
    { image: data.analytics, alt: "Analytics overview" },
    { image: data.standings, alt: "Standings detail view" },
    { image: data.dashboardScrolled, alt: "Dashboard scrolled view" },
  ]

  const clients = [
    { name: "aptihealth", url: "https://www.aptihealth.com/", description: "Virtual mental health platform", work: "iOS development and React Native feature work for a telehealth platform connecting patients with behavioral health providers.", logo: data.aptihealth },
    { name: "YouVersion", url: "https://www.youversion.com/", description: "Bible app, 1B+ downloads", work: "Mobile development contributions for one of the most downloaded apps in the world, focused on performance and user experience.", logo: data.youversion },
    { name: "Zones", url: "https://www.zones.com/", description: "Global IT solutions", work: "Full-stack web application development and API integration for enterprise IT procurement and solutions workflows.", logo: data.zones },
    { name: "Fort Health", url: "https://www.forthealth.com/", description: "Pediatric mental health care", work: "iOS and web development for a pediatric mental health platform, building patient-facing features and provider tools.", logo: data.forthealth },
  ]

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <main className="projects-page">

        <section className="featured-project" aria-labelledby="featured-title">
          <div className="featured-header">
            <span className="featured-badge">Featured</span>
            <h1 id="featured-title" className="featured-title">Fantasy League Hub</h1>
            <p className="featured-description">
              A native iOS app for fantasy football analytics. Connect your Yahoo
              and Sleeper leagues to surface years of history into deep stats,
              head-to-head breakdowns, draft grades, and AI-driven insights.
            </p>
            <div className="tech-tags" aria-label="Technologies used">
              {["SwiftUI", "Swift Charts", "Node.js", "Express", "TypeScript", "PostgreSQL", "Clerk"].map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="screenshot-gallery" role="region" aria-label="App screenshots" tabIndex="0">
            <div className="screenshot-track">
              {fantasyScreenshots.map((s, i) => (
                <div key={i} className="screenshot-frame">
                  <Image image={s.image.childImageSharp.fluid} className="screenshot-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section" aria-labelledby="clients-title">
          <h2 id="clients-title" className="clients-title">Worked With</h2>
          <div className="clients-grid">
            {clients.map(client => (
              <a key={client.name}
                 href={client.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="client-slot"
                 aria-label={`${client.name} — ${client.description}`}>
                <Image image={client.logo.childImageSharp.fluid} className="client-logo" />
                <div className="client-info">
                  <span className="client-name">{client.name}</span>
                  <span className="client-description">{client.description}</span>
                  <span className="client-work">{client.work}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>
      <ContactCTA />
    </Layout>
  )
}

export default Projects
