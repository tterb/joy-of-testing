import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Components
import { FluidContainer } from '../components/Container'



const Wrapper = styled.div`
  ${tw`flex relative items-center w-full h-full mt-0`}
  background: ${props => props.background};
  width: ${props => props.width};
  padding: 2rem 12%;
`

const Section = ({ factor, offset, speed, width, background, children }) => (
  <FluidContainer factor={factor} offset={offset} speed={speed}>
    <Wrapper background={background} width={width}>
      { children }
    </Wrapper>
  </FluidContainer>
)

Section.propTypes = {
  factor: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
}
Section.defaultProps = {
  factor: 1.2,
  offset: 0.0,
  speed: 0.6,
}

export default Section