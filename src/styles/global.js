import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

	html,
	body {
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-feature-settings: 'liga' 0;
    font-variant-ligatures: none;
    backface-visibility: hidden;
		transition: all 500ms linear;
    a {
      color: ${({ color }) => color};
    }
	}

  #___gatsby {
    .tl-edges {
      height: 100vh !important;
      .tl-wrapper {
        height: 100vh !important;
      }
    }
  }

	.layout-wrapper {
		background: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.text};
		transition: all 500ms linear;
		.menu li a,
    .post-date,
		.post-header,
		.post-content {
			color: ${({ theme }) => theme.text};
			transition: all 500ms linear;
		}
		.post-image {
			transition: all 1500ms linear 300ms;
		}
		.post-image::after {
			background: ${({ theme }) => `linear-gradient(to bottom, ${theme.gradient} 0%, ${theme.background} 100%), linear-gradient(to bottom right, ${theme.gradient} 85%, ${theme.background} 100%)`};
		}
	}
`

// export default GlobalStyle