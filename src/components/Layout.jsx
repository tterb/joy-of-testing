import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-spring/renderprops-addons'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../config/theme'
// Componemts
import Nav from './Nav'
import SEO from './SEO'
// Hooks
import { isMobile } from '../hooks/WindowDimensions'
// Styles
import styles from '../styles/styles'
import '../styles/main.scss'


const GlobalStyle = createGlobalStyle`
  ${styles}
`

const Layout = ({ pages, navLogo, pathname, customSEO, children }) => {
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
      <Nav logo={navLogo} mobile={mobile} theme={theme} />
      {children}
    </ThemeProvider>
  )
}
Layout.propTypes = {
  navLogo: PropTypes.any,
  customSEO: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  customSEO: false,
  title: 'Bob Ross',
}

export default Layout
