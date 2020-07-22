import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
// Componemts
import Footer from './Footer'
import Nav from './Nav'
import SEO from './SEO'
// Hooks
import { isMobileViewport } from '../hooks/windowDimensions'
// Styles
import { lightTheme, darkTheme } from '../styles/themes'
import { GlobalStyle } from '../styles/global'
import '../styles/main.css'
// Typefaces
import 'typeface-lato'
import 'typeface-lora'


const Wrapper = styled.div`
  /* min-height: 100vh; */
  box-shadow: 0 6px 15px -4px rgba(0,0,0,0.65);
`

const Layout = (props) => {
	const { pathname, color, customSEO, themeString, themeToggler, hasThemeSwitch, children } = props
	const isMobile = isMobileViewport()
	const theme = (themeString === 'dark') ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} color={color} />
			{!customSEO && <SEO pathname={pathname} />}
			<Wrapper id='page-layout' className='layout-wrapper relative w-full min-h-screen z-1'>
				<Nav
					color={color || theme.accent}
					theme={theme}
					themeToggler={themeToggler}
					hasThemeSwitch={hasThemeSwitch}
					isMobile={isMobile}
					{...props}
				/>
				{children}
			</Wrapper>
			<Footer theme={theme} />
		</ThemeProvider>
	)
}
Layout.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	customSEO: PropTypes.bool,
	hasThemeSwitch: PropTypes.bool,
	pathname: PropTypes.string.isRequired,
	themeString: PropTypes.string.isRequired,
	themeToggler: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}
Layout.defaultProps = {
	customSEO: false,
	hasThemeSwitch: true,
	title: 'Bob Ross',
}

export default Layout
