import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { animated } from 'react-spring'
import styled from 'styled-components'
// Components
import PageLink from './PageLink'
// Icons
import { CommentDetail } from '@styled-icons/boxicons-regular'
// Plugins
import { CommentCount } from '../../plugins/gatsby-plugin-disqus'


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

const Title = styled.h2`
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`

const PostTile = ({ post, postId, postUrl, style, testid }) => {
  const disqusConfig = {
    url: postUrl,
    identifier: postId,
    title: post.frontmatter.title,
  }
  return (
    <Item 
      key={post.fields.slug}
      data-testid={testid}
      style={style}
    >
      <Content className='tile-content'>
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
          <div className='flex flex-col text-xl md:text-lg w-full h-full p-8 md:p-6'>
            <Title className='post-item-title font-black text-white text-6xl sm:text-5xl md:text-5xl text-opacity-95 leading-none mt-0 mb-6 sm:mb-3 md:mb-3'>
              {post.frontmatter.title}
            </Title>
            <p className='text-white text-opacity-80 leading-normal m-0'>
              {post.frontmatter.desc}
            </p>
            <span className='text-lg lg:text-md mt-auto'>
            <CommentDetail className='w-10 h-10 md:w-8 md:h-8 pr-2' />
            <CommentCount
              config={disqusConfig}
              placeholder={'...'}
            />
            </span>
          </div>
        </PageLink>
      </Content>
    </Item>
  )
}
PostTile.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}

export default PostTile
