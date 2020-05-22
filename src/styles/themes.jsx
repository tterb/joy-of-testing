import { darken, rgba } from 'polished'

export const lightTheme = {
    background: '#FFFFFF',
	text: `${rgba('#000', 0.75)}`,
	gradient: `${rgba('#FFF', 0.2)}`,
	switchBase: '#FFF',
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
    background: '#2C2B30',
	text: '#FAFAFA',
	gradient: `${rgba('#2C2B30', 0.2)}`,
	switchBase: '#000',
	switchColor: '#9C9BA0',
	footer: `${darken(0.5, '#2C2B30')}`,
	accent: '#F2433B',
	footer: `${darken(0.5, '#2C2B30')}`,
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