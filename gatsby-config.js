module.exports = {
  siteMetadata: {
    title: `m1ckey`,
    description: `m1ckey - Michael Krickl`,
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
        name: `m1ckey`,
        short_name: `m1ckey`,
        start_url: `/`,
        background_color: `#1d3354`,
        theme_color: `#1d3354`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
      },
    },
  ],
};
