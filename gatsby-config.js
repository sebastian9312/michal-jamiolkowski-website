/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `michal-jamiolkowski-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ]
}
