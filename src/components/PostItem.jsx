import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { animated } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Components
import PageLink from './PageLink'


const Item = styled(animated.div)`
  ${tw`relative`}
  &:before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`

const Content = styled.div`
  ${tw`absolute w-full h-full pin-t pin-l`}
  a {
    ${tw`absolute text-white no-underline w-full h-full pin-t pin-l opacity-0 z-10`}
    transition: all 300ms ease-in-out;
    &:hover {
      ${tw`text-white no-underline opacity-100`}
    }
  }
`

const ImageWrapper = styled.div`
  > div {
    ${tw`absolute w-full h-full pin-t pin-l`}
    position: absolute !important;
    > div {
      position: static !important;
    }
  }
`

const Overlay = styled.div`
  ${tw`absolute w-full h-full pin-t pin-l`}
  z-index: -2;
`

const TracedGlow = styled.img`
  ${tw`absolute w-full h-full pin opacity-25`}
  object-fit: cover;
  filter: invert(100%);
  z-index: -1;
`

const TextWrapper = styled.div`
  ${tw`flex flex-col w-full h-full xs:p-10 xs:px-8 sm:p-6`}
  p {
    ${tw`leading-normal m-0`}
    color: rgba(255,255,255,0.8);
  }
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
  ${tw`font-black leading-tight mt-0 mb-3`}
  color: rgba(255,255,255,0.95);
  font-size: 2.65rem;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  @media screen and (min-width: 631px) and (max-width: 842px) {
    font-size: 3.25rem;
  }
  @media screen and (max-width: 561px) {
    font-size: 4rem;
  }
`

const PostItem = ({ post, style, testid }) => (
  <Item key={post.fields.slug} style={style} data-testid={testid}>
    <Content>
      <ImageWrapper>
        <Image fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
      </ImageWrapper>
      <PageLink 
        to={post.fields.slug} 
        color={post.frontmatter.color}
      >
        <TracedGlow src={post.frontmatter.thumbnail.childImageSharp.fluid.tracedSVG} alt={post.frontmatter.title} />
        <Overlay style={{ backgroundColor: post.frontmatter.color }} />
        <TextWrapper>
          <Title className='post-item-title'>{post.frontmatter.title}</Title>
          <p>{post.frontmatter.desc}</p>
        </TextWrapper>
      </PageLink>
    </Content>
  </Item>
)
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}

export default PostItem
