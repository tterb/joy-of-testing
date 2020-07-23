import React from 'react'
import Image from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// Components
import AwesomeLink from './AwesomeLink'
// Plugins
import { CommentEmbed } from '../../plugins/gatsby-plugin-disqus'

const shortcodes = { AwesomeLink, CommentEmbed, Image }

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
)