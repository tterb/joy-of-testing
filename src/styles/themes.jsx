import { darken, rgba } from 'polished'

export const lightTheme = {
	background: '#FFFFFF',
	title: `${rgba('#000', 0.75)}`,
	text: `${rgba('#000', 0.75)}`,
	gradient: `${rgba('#FFF', 0.2)}`,
	switchBase: `#F9F9F9D0`,
	switchColor: '#FFF',
	buttonHover: '#EEE',
	accent: '#F2433B',
	buttonShadow: `0 2px 2px ${rgba('#000', 0.2)}`,
	footer: '#2C2B30',
	osanoBackground: `${rgba('#FFF', 0.9)}`,
    breakpoints: {
		xs: '400px',
		s: '560px',
		m: '650px',
		l: '900px',
	},
	container: {
		base: '100rem',
		text: '60rem',
	},
	spacer: {
		horizontal: '2rem',
		vertical: '3rem',
	},
}

export const darkTheme = {
	background: '#1d1d20',
	title: `${rgba('#fff', 0.95)}`,
	text: `${rgba('#fff', 0.8)}`,
	gradient: `${rgba('#1d1d20', 0.2)}`,
	switchBase: `${rgba('#FFF', 0.1)}`,
	switchColor: '#9C9BA0',
	buttonHover: '#3d3d40',
	accent: '#F2433B',
	buttonShadow: `0 2px 4px ${rgba('#000', 0.75)}`,
	footer: `${darken(0.04, '#1d1d20')}`,
	osanoBackground: `${rgba('#1d1d20', 0.9)}`,
    breakpoints: {
		xs: '400px',
		s: '560px',
		m: '650px',
		l: '900px',
	},
	container: {
		base: '100rem',
		text: '60rem',
	},
	spacer: {
		horizontal: '2rem',
		vertical: '3rem',
	},
}