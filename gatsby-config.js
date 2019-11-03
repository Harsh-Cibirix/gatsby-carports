module.exports = {
  siteMetadata: {
    title: `Carport Template`,
    description: `Developing Carports Template in Gatsby`,
    author: `Harsh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "Carports",
        // The field you'll query against, can also be anything you want.
        fieldName: "carports",
        // Your API endpoint, available from the dashboard and settings window.
        url:
          "https://api-uswest.graphcms.com/v1/ck2hhzcov1m1901gq4kl1a6qg/master",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
