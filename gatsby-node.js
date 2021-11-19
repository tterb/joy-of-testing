const _ = require('lodash')


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    )
      slug = `/${_.kebabCase(node.frontmatter.slug)}`

    // Otherwise use the title for the slug
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    )
      slug = `/${_.kebabCase(node.frontmatter.title)}`

    createNodeField({ node, name: 'slug', value: slug })
    // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

// graphql function doesn't throw an error so we have to check to check for the query.errors to throw manually
const queryWrapper = promise => promise.then(query => {
  if (query.errors) {
    throw query.errors
  }
  return query
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // page templates
  const postTemplate = require.resolve('./src/templates/post.jsx')

  const result = await queryWrapper(
    graphql(`
      {
        posts: allMdx(filter: { fields: { sourceInstanceName: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `),
  )

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: postTemplate,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: post.fields.slug,
      },
    })
  })
}

// Necessary changes to get gatsby-mdx and Cypress working
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}
