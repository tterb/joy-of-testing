import { css } from 'styled-components'

const styles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    font-feature-settings: 'liga' 0;
    font-variant-ligatures: none;
    backface-visibility: hidden;
  }

  #___gatsby {
    .tl-edges {
      height: 100vh !important;
      .tl-wrapper {
        height: 100vh !important;
      }
    }
  }
`

export default styles