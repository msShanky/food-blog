module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1v1tt1rhrx9m`,
        accessToken: `58ae76c44b515f676f13c8609ea709cabd629f7319b64036fa6b1b0c2440c07e`,      
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
