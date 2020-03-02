import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { rgba } from 'polished'

const shade = `rgba(255, 255, 255, 0.2)`

// position: static on the image wrapper resets the absolute positioning and allows for some custom styling
// the single/project templates have different headers

const PostImage = styled.div`
  ${tw`w-full h-full`}
  box-sizing: border-box;
  .gatsby-image-wrapper {
    position: static !important;
    filter: grayscale(100%);
    min-height: 100%;
    margin-top: -3rem;
    > div {
      padding-bottom: 50vw !important;
      @media (max-width: ${props => props.theme.breakpoints.m}),
        (max-device-width: ${props => props.theme.breakpoints.m}) {
        padding-bottom: ${props => (props.single ? '40vw' : '60vw')};!important;
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
  ${props =>
    props.customcolor &&
    css`
      &:before {
        ${tw`absolute w-full h-full pin-t pin-l z-2`}
        background: ${`linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${rgba(props.customcolor, 0.6)} 100%)`};
        content: '';
        mix-blend-mode: overlay;
      }
    `}
  &:after {
    ${tw`absolute w-full h-full pin-t pin-l z-2`}
    background: ${({ theme }) => `linear-gradient(to bottom, ${shade} 0%, #fff 100%), linear-gradient(to right, ${shade} 80%, #fff 100%)`};
    content: '';
    backface-visibility: hidden;
  }
`

export default PostImage
