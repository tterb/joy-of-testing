import styled from 'styled-components'
import tw from 'tailwind.macro'

const PostHero = styled.section`
  ${tw`relative overflow-hidden mt-0 mb-4`}
  height: 50vh;
  min-height: 28rem;
  @media (max-width: ${props => props.theme.breakpoints.m}),
    (max-device-width: ${props => props.theme.breakpoints.m}) {
    min-height: 22rem;
  }
  /* @media (max-width: ${props => props.theme.breakpoints.s}),
    (max-device-width: ${props => props.theme.breakpoints.s}) {
    min-height: 22rem;
  } */
`

export default PostHero