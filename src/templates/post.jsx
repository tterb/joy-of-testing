import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { animated, useSpring, config } from 'react-spring'
import styled from 'styled-components'
import { darken } from 'polished'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
import useTransition from '../hooks/useTransition'
// Components
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import MDXWrapper from '../components/MDXWrapper'
import PostHero from '../components/PostHero'
import PostImage from '../components/PostImage'
// Plugins
import { Disqus, CommentCount, Recommendations } from '../../plugins/gatsby-plugin-disqus'


const Title = styled(animated.h1)``

const PostDetail = styled(animated.div)`
  span::after {
    color: ${props => props.color};
  }
`

const PostDate = styled.span`
  right: 4px;
`

const PostBody = styled(animated.div)`
  a {
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
  const isDarkMode = themeString === 'dark'
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
        <Wrapper type='text' className='post-header absolute w-9/10 lg:w-4/5 left-0 right-0 bottom-0 mx-auto pt-8 pb-4 z-5'>
          <Title
            data-testid='post-title'
            style={titleProps}
            className='font-black text-6xl sm:text-7xl md:text-8xl leading-tighter w-9/10 my-0'
          >
            {frontmatter.title}
          </Title>
          <PostDetail
            color={frontmatter.color}
            style={infoProps}
            className='post-detail flex flex-row flex-wrap items-center justify-start mx-0 mt-2 mb-1 pt-2 pl-2'
          >
            <PostDate className='post-date block relative text-lg md:text-xl text-right leading-normal top-0 m-0'>
              {frontmatter.date.split(' ').map((item, i) => (
                (i !== 1) ? <strong key={i} className='font-black py-0 px-1'>{item}</strong> : item
              ))}
            </PostDate>
            <CommentCount
              config={disqusConfig}
              placeholder={'...'}
              className='block relative text-lg md:text-xl text-right leading-normal h-full top-0 m-0'
            />
          </PostDetail>
        </Wrapper>
      </PostHero>
      <Wrapper type='text' className='post-content w-9/10 lg:w-4/5 mx-auto pb-12'>
        <PostBody
          style={contentProps}
          color={frontmatter.color}
          className='text-xl m-auto mt-0 mb-8 pt-6'
        >
          <Recommendations
            config={disqusConfig}
            theme={useTransition(isDarkMode).toString()}
          />
          <MDXWrapper>{node.body}</MDXWrapper>
        </PostBody>
        <Disqus
          className='w-full mx-auto pb-8'
          config={disqusConfig}
          theme={useTransition(isDarkMode).toString()}
        />
      </Wrapper>
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
          }
        }
      }
    }
  }
`
