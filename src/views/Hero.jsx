import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
// Components
import { FluidContainer } from '../components/Container'


const Wrapper = styled.div`
  height: 60vh;
`

const HeroImage = styled(GatsbyImage)`
  height: 60vh;
  > div {
    padding-bottom: 28% !important;
  }
`

const Hero = ({ background, factor, offset, speed }) => (
  <FluidContainer factor={factor} offset={offset} speed={speed}>
    <Wrapper className='relative w-full mt-0 overflow-hidden'>
      <HeroImage
        className='w-full'
        image={background.childImageSharp.gatsbyImageData}
        alt='Painting'
      />
    </Wrapper>
  </FluidContainer>
)
Hero.propTypes = {
  background: PropTypes.any.isRequired,
  factor: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
}
Hero.defaultProps = {
  factor: 0.8,
  offset: 0.5,
  speed: 0.4,
}

export default Hero