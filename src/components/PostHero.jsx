import React from 'react'
import styled from 'styled-components'


const Hero = styled.section`
  height: 55vh;
  min-height: 28rem;
  max-height: 36rem;
  @media (max-width: ${props => props.theme.breakpoints.m}),
    (max-device-width: ${props => props.theme.breakpoints.m}) {
    min-height: 22rem;
  }
`

const PostHero = (props) => (
  <Hero className='relative overflow-hidden my-0' {...props}>
    {props.children}
  </Hero>
)

export default PostHero