import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

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
		transition: background 500ms linear, color 500ms linear;
    h1, h2, h3, .blog-title {
      color: ${({ theme }) => theme.title};
    }
		.menu li a,
    .quote-wrapper,
    .post-date,
		.post-header,
		.post-content {
			color: ${({ theme }) => theme.text};
		}
    .canvas,
    .blog-wrapper {
      background: ${({ theme }) => theme.background} !important;
    }
    .quote-section {
      background: ${({ theme }) => `linear-gradient(to bottom, ${theme.background} 50%, ${rgba(theme.background, 0.5)} 80%, transparent)`};
    }
		.post-image {
			transition: all 500ms linear 0ms;
		}
		.post-image::after {
			${'' /* background: ${({ theme }) => `linear-gradient(to bottom, ${theme.gradient} 0%, ${theme.background} 100%), linear-gradient(to bottom right, ${theme.gradient} 85%, ${theme.background} 100%)`}; */}
      background: ${({ theme }) => `radial-gradient(75% 90% at center -5%, ${theme.gradient} 0%, ${theme.background} 100%)`};
		}
	}
`

// export default GlobalStyle