import { css } from 'styled-components'
import theme from '../../config/theme'

const styles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-feature-settings: 'liga'0;
    font-variant-ligatures: none;
    backface-visibility: hidden;
  }

  #___gatsby {
    height: 100% !important;
    > div {
      height: 100% !important;
    }
    .tl-edges {
      height: 100vh !important;
      .tl-wrapper {
        height: 100vh !important;
      }
    }
  }

  .logo-container {
    top: -0.35rem;
  }
`

export default styles