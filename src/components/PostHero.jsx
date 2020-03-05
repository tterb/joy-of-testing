import styled from 'styled-components'
import tw from 'tailwind.macro'

const PostHero = styled.section`
  ${tw`relative overflow-hidden mt-0 mb-4`}
  height: 50vh;
  min-height: 28rem;
  @media (max-width: ${props => props.theme.breakpoints.s}),
    (max-device-width: ${props => props.theme.breakpoints.s}) {
    margin-top: -6rem;
  }
`

export default PostHero