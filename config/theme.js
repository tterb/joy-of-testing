import { darken } from 'polished'

const brand = {
  primary: '#15BBC5',
  secondary: '#E04445',
  accent: '#F2433B',
}

const colors = {
  black: '#000',
  grey: '#687880',
  light_grey: '#E4E6E9',
  white: '#FFF',
  bg_color: '#F8FAFC',
  body_color: 'rgba(0,0,0,0.75)',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
  accent: brand.accent,
}

const theme = {
  brand,
  colors,
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

export default theme