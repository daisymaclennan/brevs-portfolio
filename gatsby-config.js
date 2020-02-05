/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jack Bretherick Portfolio",
        short_name: "JackBretherickPortfolio",
        start_url: "/",
        display: "standalone",
        icon: "static/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
        ],
        display: 'swap'
      }

    },
  ],
}
