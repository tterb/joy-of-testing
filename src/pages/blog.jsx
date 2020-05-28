import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useTrail } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import BlogHero from '../components/BlogHero'


const Wrapper = styled.div`
  ${tw`relative w-full h-auto pin-t my-0 mx-auto`}
  z-index: -999;
`

const ListWrapper = styled.div`
  ${tw`w-full`}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2px;
`

const Blog = ({ data: { allMdx: { edges: post } }, location }) => {
  const trail = useTrail(post.length, {
    from: { height: '0%' },
    to: { height: '100%' },
  })
  const [themeString, themeToggler] = useDarkMode()
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <BlogHero />
      <Wrapper>
        <ListWrapper className='blog-wrapper'>
          {trail.map((style, index) => (
            <PostItem
              testid={`postItem-${index}`}
              style={style}
              key={post[index].node.fields.slug}
              post={post[index].node}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </Layout>
  )
}
Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            color
            title
            desc
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#ffffff" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            thumbnail: cover {
              childImageSharp {
                fluid(maxWidth: 480, quality: 90, traceSVG: { color: "#ffffff" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`