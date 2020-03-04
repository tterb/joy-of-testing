'use strict'

var didRunAlready = false
var shortname = ''
var embedUrl = ''

exports.onPreInit = (_ref, pluginOptions) => {
  // Gatsby adds a pluginOptions that's not needed for this plugin
  delete pluginOptions.plugins
  shortname = pluginOptions.shortname
  embedUrl = pluginOptions.embedUrl

  if (didRunAlready) {
    throw new Error('You can only have single instance of gatsby-plugin-disqus in your gatsby-config.js')
  }

  didRunAlready = true
}

exports.onCreateWebpackConfig = (_ref2) => {
  var plugins = _ref2.plugins,
      actions = _ref2.actions
  var setWebpackConfig = actions.setWebpackConfig
  setWebpackConfig({
    plugins: [plugins.define({
      GATSBY_DISQUS_SHORTNAME: JSON.stringify(shortname),
      GATSBY_DISQUS_EMBED_URL: JSON.stringify(embedUrl),
    })]
  })
}