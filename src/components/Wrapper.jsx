import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 95%;
  max-width: ${props => props.theme.container[props.type]};
  padding: 0 ${props => props.theme.spacer.horizontal};
  &.page-content {
    margin-bottom: 10rem;
  }
  &.project-content {
    margin-bottom: 7rem;
    h2 {
      margin-top: 0;
    }
  }
  ${props =>
    props.type === 'text' &&
    css`
      p {
        letter-spacing: -0.003em;
        line-height: 1.58;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
      }
      .gatsby-image-wrapper {
        width: 92.5%;
        margin: 2.5rem auto;
      }
    `};
  @media (max-width: ${props => props.theme.breakpoints.s}), (max-device-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
`

const Wrapper = ({ children, type, className }) => (
  <Container className={`${className} mx-auto my-0`} type={type}>
    {children}
  </Container>
)

export default Wrapper

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['base', 'text']),
  className: PropTypes.string,
}

Wrapper.defaultProps = {
  type: 'base',
  className: null,
}
