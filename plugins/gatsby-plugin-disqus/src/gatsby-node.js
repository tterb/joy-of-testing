'use strict'

var didRunAlready = false
var shortname = ''
var embedUrl = ''
var recommendationsUrl = ''

exports.onPreInit = (_ref, pluginOptions) => {
  // Gatsby adds a pluginOptions that's not needed for this plugin
  delete pluginOptions.plugins
  shortname = pluginOptions.shortname
  embedUrl = pluginOptions.embedUrl
  recommendationsUrl = pluginOptions.recommendationsUrl
  console.log(`shortname: ${shortname}`)
  console.log(`embed_url: ${embedUrl}`)
  console.log(`recommendations_url: ${recommendationsUrl}`)

  if (didRunAlready) {
    throw new Error('You can only have single instance of gatsby-plugin-disqus in your gatsby-config.js')
  }

  didRunAlready = true
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_DISQUS_SHORTNAME: JSON.stringify(shortname),
        GATSBY_DISQUS_EMBED_URL: JSON.stringify(embedUrl),
        GATSBY_DISQUS_RECS_URL: JSON.stringify(recommendationsUrl),
      })
    ]
  })
}