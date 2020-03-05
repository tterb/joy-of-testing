const config = require(`./config/website`)
const dotenv = require(`dotenv`)


const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

dotenv.config({
  path: `.env.${activeEnv}`,
})

console.log(activeEnv)

const SHORTNAME = `happy-little-trees`
const PROTOCOL = process.env.PROTOCOL || `https`
const BASE = process.env.BASE || `disqus.com/embed.js`
const EMBED_URL = `${PROTOCOL}://${SHORTNAME}.${BASE}`

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `Bob Ross`,
    description: `Bob Ross`,
    siteUrl: config.siteUrl + pathPrefix,
    author: `Brett Stevenson`,
    keywords: [`bob-ross`, `paintings`, `disqus`],
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
        external: false,
      },
      {
        name: `Blog`,
        link: `/blog/`,
        external: false,
      },
    ],
  },
  /* Plugins */
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: SHORTNAME,
        embedUrl: EMBED_URL,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require(`tailwindcss`)(`./tailwind.js`)],
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`cloning`, `flattening`, `metadata`, `placeholders`, `shorthands`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              class: `emoji`,
              size: 32,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`, // Implements PostCSS
      options: {
        postCssPlugins: [
          require(`postcss-import`), // Add support for sass-like `@import`
          require(`postcss-extend`), // Add support for sass-like `@extend`
          require(`postcss-nesting`), // Add support for sass-like nesting of rules
          require(`postcss-calc`),
          require(`postcss-discard-comments`),
          require(`cssnano`), // Minify CSS
          require(`postcss-reporter`),
          require(`postcss-pxtorem`)({
            mediaQuery: false, // Ignore media queries
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            selectorBlackList: [`html`], // Ignore pixels used for html
            unitPrecision: 4,  // Round rem units to 4 digits
          }),
          require(`postcss-preset-env`)({
            stage: 3,  // More info about stages: https://cssdb.org/#staging-process
          }),
        ],
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true,
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `900`]
          },
          {
            family: `Lora`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/*_.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/contents/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-netlify`,
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
  ],
}
