module.exports = {
  siteMetadata: {
    title: `Frank Nardone`,
    description: `Frank Nardone — designer and developer specializing in iOS, web, full-stack, and AI-enabled applications. Available for contract work.`,
    author: `@nardonef`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frank Nardone`,
        short_name: `Frank`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/github.svg`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
}
