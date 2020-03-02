import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
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
  ${tw`absolute w-full h-full pin`}
  opacity: 0.25;
  object-fit: cover;
  filter: invert(100%);
  z-index: -1;
`

const TextWrapper = styled.div`
  ${tw`flex flex-col w-full h-full xs:p-10 xs:px-8 sm:p-6`}
  p {
    ${tw`leading-normal m-0 xs:text-xl`}
    color: rgba(255,255,255,0.8);
  }
`

const Title = styled.h2`
  ${tw`font-black leading-tight mt-0 mb-3`}
  color: rgba(255,255,255,0.95);
  font-size: 2.65rem;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`

const PostItem = ({ node, style, testid }) => (
  <Item key={node.fields.slug} style={style} data-testid={testid}>
    <Content>
      <ImageWrapper>
        <Image fluid={node.frontmatter.thumbnail.childImageSharp.fixed} />
      </ImageWrapper>
      <PageLink to={node.fields.slug}>
        <TracedGlow src={node.frontmatter.thumbnail.childImageSharp.fixed.tracedSVG} alt={node.frontmatter.title} />
        <Overlay style={{ backgroundColor: node.frontmatter.color }} />
        <TextWrapper>
          <Title>{node.frontmatter.title}</Title>
          <p>{node.frontmatter.desc}</p>
        </TextWrapper>
      </PageLink>
    </Content>
  </Item>
)
PostItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}

export default PostItem
