import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// Components
import AwesomeLink from './AwesomeLink'
// Plugins
import { CommentEmbed } from '../../plugins/gatsby-plugin-disqus'

const shortcodes = { AwesomeLink, CommentEmbed, GatsbyImage }

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
)