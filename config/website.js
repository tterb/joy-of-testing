const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Bob Ross`, // Navigation and Site Title
  siteTitleAlt: `Bob Ross`, // Alternative Site title for SEO
  siteTitleShort: `Bob Ross`, // short_name for manifest
  siteHeadline: `Bob Ross`, // Headline for schema.org JSONLD
  siteUrl: `https://joy-of-testing.netlify.com`, // Domain of your site. No trailing slash!
  siteKeywords: [`bob-ross`, `paintings`, `disqus`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/icon.png`, // Used for SEO and manifest
  siteDescription: `Bob Ross`,
  author: {
    name: `Brett Stevenson`,
    bio: `Software engineer at Disqus`,
  },
  googleTrackingID: `UA-82760104-3`,
  disqusShortname: `happy-little-trees`,
}
