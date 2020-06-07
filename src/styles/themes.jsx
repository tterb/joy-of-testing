import { darken, rgba } from 'polished'

export const lightTheme = {
	background: '#FFFFFF',
	title: `${rgba('#000', 0.75)}`,
	text: `${rgba('#000', 0.75)}`,
	gradient: `${rgba('#FFF', 0.2)}`,
	switchBase: `${rgba('#FFF', 0.3)}`,
	switchColor: '#FFF',
	footer: '#2C2B30',
    accent: '#F2433B',
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
	switchBase: `${rgba('#000', 0.2)}`,
	switchColor: '#9C9BA0',
	accent: '#F2433B',
	footer: `${darken(0.04, '#1d1d20')}`,
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