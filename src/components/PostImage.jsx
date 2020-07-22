import React from 'react'
import styled from 'styled-components'

// position: static on the image wrapper resets the absolute positioning and allows for some custom styling
// the single/project templates have different headers

const PostImageWrapper = styled.div`
  .gatsby-image-wrapper {
    position: static !important;
    min-height: 100%;
    > div {
      padding-bottom: 50vw !important;
      @media (max-width: ${props => props.theme.breakpoints.m}),
        (max-device-width: ${props => props.theme.breakpoints.m}) {
        padding-bottom: ${props => (props.single ? '40vw' : '60vw')} !important;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}),
        (max-device-width: ${props => props.theme.breakpoints.s}) {
        padding-bottom: 400px !important;
      }
      @media (max-width: ${props => props.theme.breakpoints.xs}),
        (max-device-width: ${props => props.theme.breakpoints.xs}) {
        padding-bottom: 400px !important;
      }
    }
  }
`

const PostImage = (props) => (
  <PostImageWrapper className='post-image' {...props}>
    {props.children}
  </PostImageWrapper>
)

export default PostImage
