import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'
// Components
import { Container, FluidContainer } from '../components/Container'


const Wrapper = styled.div`
  ${tw`relative w-full mt-0 overflow-hidden`}
  height: 60vh;
`

const HeroImage = styled(Image)`
  ${tw`w-full`}
  height: 60vh;
  > div {
    padding-bottom: 28% !important;
  }
`

const Hero = ({ factor, offset, speed, background }) => (
  <FluidContainer factor={factor} offset={offset} speed={speed}>
    <Wrapper>
      <HeroImage fluid={background.childImageSharp.fluid} alt='Painting' />
    </Wrapper>
  </FluidContainer>
)
Hero.propTypes = {
  factor: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  background: PropTypes.any.isRequired,
}

export default Hero