import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'tailwind.macro'
import { animated, useSpring, config } from 'react-spring'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
// Components
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import PostHero from '../components/PostHero'
import PostImage from '../components/PostImage'
// Config
import site from '../../config/website'

const HeaderContent = styled(Wrapper)`
  ${tw`absolute w-4/5 pin-l pin-r pin-b mx-auto pt-8 pb-0 z-3`}
  color: rgba(0,0,0,0.8);
`

const ContentBody = styled(Wrapper)`
  ${tw`w-4/5 mx-auto mb-12`}
  color: rgba(0,0,0,0.75);
`

const Title = styled(animated.h1)`
  ${tw`text-5xl md:text-6xl font-black leading-tighter w-9/10 my-0`}
  @media screen and (max-width: 560px) {
    font-size: 4.5rem;
  }
`

const PostDetail = styled(animated.div)`
  ${tw`flex flex-row flex-wrap items-center justify-start mx-0 mt-2 mb-1 pt-2 pl-2`}
  span::after {
    position: relative;
    content: '•';
    font-size: 0.7rem;
    color: rgba(0,0,0,0.35);
    top: -2px;
    padding: 0 4px;
  }
  span:last-child {
    &::after {
      content: '';
    }
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
  ${tw`m-auto mb-12`}
  a {
    ${tw`no-underline`}
    color: ${props => props.color};
    &:hover {
      color: ${props => props.color};
    }
  }
`

const CommentThread = styled(Disqus)`
  ${tw`w-full mx-auto`}
`

const Post = ({ data: { mdx: node }, location }) => {
  const post = node.frontmatter
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  let disqusConfig = {
    url: `${site.siteUrl+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO pathname={location.pathname} node={node} article />
      <PostHero>
        <PostImage customcolor={post.color}>
          <Image fluid={post.cover.childImageSharp.fluid} alt={post.title} />
        </PostImage>
        <HeaderContent type="text">
          <Title data-testid="post-title" style={titleProps}>
            {post.title}
          </Title>
          <PostDetail style={infoProps}>
            <PostDate>
              {post.date.split(' ').map((item, i) => (
                (i !== 1) ? <strong key={i}>{item}</strong> : item
              ))}
            </PostDate>
            <CommentCount config={disqusConfig} placeholder={'...'} />
          </PostDetail>
        </HeaderContent>
      </PostHero>
      <ContentBody type="text" className="post-content">
        <PostBody style={contentProps} color={post.color}>
          <MDXRenderer>{node.code.body}</MDXRenderer>
        </PostBody>
        <CommentThread config={disqusConfig} />
      </ContentBody>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
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
        date(formatString: "DD MMMM YYYY")
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
