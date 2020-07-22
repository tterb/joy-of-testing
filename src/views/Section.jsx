import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Components
import { FluidContainer } from '../components/Container'


const Wrapper = styled.div`
  background: ${props => props.background};
  width: ${props => props.width};
  padding: 2rem 12%;
`

const Section = ({ factor, offset, speed, width, background, className, children }) => (
  <FluidContainer factor={factor} offset={offset} speed={speed}>
    <Wrapper
      width={width}
      background={background}
      className={`${className} flex relative items-center w-full h-full mt-0`}
    >
      { children }
    </Wrapper>
  </FluidContainer>
)

Section.propTypes = {
  factor: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}
Section.defaultProps = {
  factor: 1.2,
  offset: 0.0,
  speed: 0.6,
}

export default Section