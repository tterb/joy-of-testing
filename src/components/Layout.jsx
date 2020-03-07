import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
// Componemts
import Footer from './Footer'
import Nav from './Nav'
import SEO from './SEO'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'
// Theme
import theme from '../../config/theme'
// Styles
import styles from '../styles/styles'
import '../styles/main.scss'
// Typefaces
import 'typeface-lato'
import 'typeface-neuton'

const GlobalStyle = createGlobalStyle`
  ${styles}
`

const Wrapper = styled.div`
  ${tw`relative w-full z-1`}
  background: white;
  min-height: 100vh;
  box-shadow: 0 6px 15px -4px rgba(0,0,0,0.65);
`

const Layout = ({ pages, navLogo, pathname, color, customSEO, children }) => {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 600,
      easing: 'easeInOutCubic',
      updateURL: false,
    })
  }
  const mobile = isMobile()

  return (
    <ThemeProvider theme={theme}>
      {!customSEO && <SEO pathname={pathname} />}
      <GlobalStyle />
      <Wrapper>
        <Nav logo={navLogo} mobile={mobile} color={color} theme={theme} />
        {children}
      </Wrapper>
      <Footer />
    </ThemeProvider>
  )
}
Layout.propTypes = {
  navLogo: PropTypes.any,
  customSEO: PropTypes.bool,
  color: PropTypes.string,
  pages: PropTypes.number,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  customSEO: false,
  title: 'Bob Ross',
}

export default Layout
