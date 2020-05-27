module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `The Joy of Testing`, // Navigation and Site Title
  siteTitleAlt: `We don't make mistakes, we just have happy accidents.`, // Alternative Site title for SEO
  siteTitleShort: `Joy of Testing`, // short_name for manifest
  siteHeadline: `The Joy of Testing`, // Headline for schema.org JSONLD
  siteUrl: `https://joyoftesting.com`, // Domain of your site. No trailing slash!
  siteKeywords: [`joy`, `of`, `testing`, `bob-ross`, `quotes`, `painting`, `disqus`, `lorem`, `ipsum`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `/icon.png`, // Used for SEO and manifest
  siteDescription: `We don't make mistakes, we just have happy accidents.`,
  author: {
    name: `Brett Stevenson`,
    bio: `Software engineer at Disqus`,
  },
  googleAnalyticsID: `UA-82760104-3`,
  disqusShortname: `happy-little-trees`,
  // Links
  links: {
    github: `https://github.com/tterb/joy-of-testing`,
    disqus: `https://disqus.com/home/forum/happy-little-trees`,
    gatsby: `https://gatsbyjs.com`,
  },
  colors: {
    background: `#F8FAFC`,
    link_color: `#15BBC5`,
    accent: `#F2433B`,
  },
}
