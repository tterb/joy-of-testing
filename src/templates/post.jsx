import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { animated, useSpring, config } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { darken } from 'polished'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import CommentThread from '../components/CommentThread'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import PostHero from '../components/PostHero'
import PostImage from '../components/PostImage'
// Plugins
import { CommentCount } from '../../plugins/gatsby-plugin-disqus'


const HeaderContent = styled(Wrapper)`
  ${tw`absolute w-9/10 lg:w-4/5 pin-l pin-r pin-b mx-auto pt-8 pb-4 z-5`}
`

const ContentBody = styled(Wrapper)`
  ${tw`w-9/10 lg:w-4/5 mx-auto pb-12`}
`

const Title = styled(animated.h1)`
  ${tw`text-5xl sm:text-6xl md:text-7xl font-black leading-tighter w-9/10 my-0`}
`

const PostDetail = styled(animated.div)`
  ${tw`flex flex-row flex-wrap items-center justify-start mx-0 mt-2 mb-1 pt-2 pl-2`}
  span::after {
    ${tw`relative text-xs p-0 px-1`}
    content: '•';
    color: ${props => props.color};
    top: -2px;
  }
  span:last-child::after {
    content: '';
  }
  .disqus-comment-count {
    ${tw`block relative text-lg md:text-xl text-right leading-normal h-full pin-t m-0`}
  }
`

const PostDate = styled.span`
  ${tw`block relative text-lg md:text-xl text-right leading-normal pin-t m-0`}
  right: 4px;
  strong {
    ${tw`font-black py-0 px-1`}
  }
`

const PostBody = styled(animated.div)`
  ${tw`m-auto pt-6 mb-16`}
  a {
    ${tw`no-underline`}
    color: ${props => darken(0.1, props.color)} !important;
    transition: color 250ms ease-in-out;
    &:hover {
      color: ${props => darken(0.25, props.color)} !important;
    }
  }
`

const Post = ({ data: { site, mdx: node }, location }, ...props) => {
  const frontmatter = node.frontmatter
  const siteUrl = site.siteMetadata.siteUrl
  const [themeString, themeToggler] = useDarkMode()
  const disqusConfig = {
    url: `${siteUrl+location.pathname}`,
    identifier: node.id,
    title: frontmatter.title,
  }

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout
      pathname={location.pathname}
      color={frontmatter.color}
      themeString={themeString}
      themeToggler={themeToggler}
      hasThemeSwitch
      customSEO
    >
      <SEO pathname={location.pathname} node={node} article />
      <PostHero>
        <PostImage customcolor={frontmatter.color} className='post-image'>
          <Image fluid={frontmatter.cover.childImageSharp.fluid} alt={frontmatter.title} />
        </PostImage>
        <HeaderContent type='text' className='post-header'>
          <Title data-testid='post-title' style={titleProps}>
            {frontmatter.title}
          </Title>
          <PostDetail color={frontmatter.color} style={infoProps}>
            <PostDate className='post-date'>
              {frontmatter.date.split(' ').map((item, i) => (
                (i !== 1) ? <strong key={i}>{item}</strong> : item
              ))}
            </PostDate>
            <CommentCount config={disqusConfig} placeholder={'...'} />
          </PostDetail>
        </HeaderContent>
      </PostHero>
      <ContentBody type='text' className='post-content'>
        <PostBody style={contentProps} color={frontmatter.color}>
          <MDXRenderer>{node.body}</MDXRenderer>
        </PostBody>
        <CommentThread config={disqusConfig} theme={themeString} />
      </ContentBody>
    </Layout>
  )
}
Post.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
      })
    }).isRequired,
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id,
      body
      excerpt
      fields {
        slug
      }
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        desc
        color
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
