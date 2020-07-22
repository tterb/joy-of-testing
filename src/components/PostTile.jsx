import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { animated } from 'react-spring'
import styled from 'styled-components'
// Components
import PageLink from './PageLink'


const Item = styled(animated.div)`
  position: relative;
  &:before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`

const Content = styled.div`
  a {
    transition: all 300ms ease-in-out;
    &:hover {
      /* ${tw`text-white no-underline opacity-100`} */
    }
  }
`

const Overlay = styled.div`
  z-index: -2;
`

const TracedGlow = styled.img`
  object-fit: cover;
  filter: invert(100%);
  z-index: -1;
`

const TextWrapper = styled.div`
  /* ${tw`flex flex-col w-full h-full xs:p-10 xs:px-8 sm:p-6`}
  p {
    color: rgba(255,255,255,0.8);
  } */
  @media screen and (min-width: 631px) and (max-width: 842px) {
    font-size: 1.5rem;
    padding: 1.75rem;
  }
  @media screen and (max-width: 561px) {
    font-size: 1.75rem;
    padding: 2rem;
  }
`

const Title = styled.h2`
  /* ${tw`font-black leading-tight mt-0 mb-3`} */
  /* color: rgba(255,255,255,0.95); */
  font-size: 2.65rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  @media screen and (min-width: 631px) and (max-width: 842px) {
    font-size: 3.25rem;
  }
  @media screen and (max-width: 561px) {
    font-size: 4rem;
  }
`

const PostTile = ({ post, style, testid }) => (
  <Item 
    key={post.fields.slug}
    data-testid={testid}
    style={style}
  >
    <Content>
      <div className='tile-image-wrapper'>
        <Image fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
      </div>
      <PageLink 
        to={post.fields.slug} 
        color={post.frontmatter.color}
      >
        <TracedGlow 
          className='absolute w-full h-full inset-0 opacity-25'
          src={post.frontmatter.thumbnail.childImageSharp.fluid.tracedSVG}
          alt={post.frontmatter.title}
        />
        <Overlay 
          className='tile-content'
          style={{ backgroundColor: post.frontmatter.color }}
        />
        <TextWrapper className='flex flex-col w-full h-full xs:p-10 xs:px-8 sm:p-6'>
          <Title className='post-item-title font-black text-white text-opacity-95 leading-none mt-0 mb-3'>{post.frontmatter.title}</Title>
          <p className='text-white text-opacity-80 leading-normal m-0'>{post.frontmatter.desc}</p>
        </TextWrapper>
      </PageLink>
    </Content>
  </Item>
)
PostTile.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}

export default PostTile
