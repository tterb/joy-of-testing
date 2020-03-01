import styled from 'styled-components'
import tw from 'tailwind.macro'

const PostHero = styled.section`
  ${tw`relative overflow-hidden`}
  height: 50vh;
  margin-top: 0;
  margin-bottom: 2rem;
  @media (max-width: 620px), (max-device-width: 620px) {
    margin-top: -5.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}),
    (max-device-width: ${props => props.theme.breakpoints.s}) {
    height: 50vh;
    margin-top: -7rem;
  }
  @media screen and (max-width: 500px) {
    height: 50vh;
  }
`

export default PostHero