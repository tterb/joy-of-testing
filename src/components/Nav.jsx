import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
// Components
import PageLink from './PageLink'
import ThemeSwitcher from './ThemeSwitcher'


const Wrapper = styled.div`
  transform: translate3D(0, 0, 0);
`

const MenuItem = styled.li`
  a {
    color: ${props => props.theme.text} !important;
  }
  &.inline-menu a:hover {
    color: ${props => props.theme.accent} !important;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Navbar = styled.div`
  right: 0.5rem;
  @media screen and (max-width: 550px) {
    right: 2rem;
  }
`

const MenuPanel = styled.div`
  &.active {
    transform: translateY(0);
    opacity: 0.9;
    &::before {
      background: ${props => props.theme.background};
    }
  }
  li {
    font-size: 12vw;
    width: max-content;
    &:first-child {
      margin-top: 4rem;
    }
    a {
      color: rgba(0,0,0,0.75);
      &::before {
        position: absolute;
        background: ${props => props.theme.accent};
        content: '';
        width: 0;
        height: 8px;
        top: 50%;
        left: -10%;
        transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
      }
      &:hover, &:active {
        color: rgba(0,0,0,0.95);
        &::before {
          width: 120%;
          transition: width 500ms cubic-bezier(0.77, 0, 0.175, 1);
        }
      }
    }
  }
`

const Button = styled.span`
  color: ${props => props.theme.text};
  width: 30px;
  height: 25px;
  top: 0.75rem;
  right: 1rem;
  transition: all 350ms ease-in-out;
  &.active {
    width: 25px;
    transform: rotate(-45deg);
    transition: all 200ms ease-out;
    .half {
      width: 50%;
    }
    .start {
      transform: rotate(-90deg) translateX(2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: right;
    }
    .end {
      transform: rotate(-90deg) translateX(-2px);
      transition: width 300ms ease-out 25ms, transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57) 25ms;
      transform-origin: left;
    }
  }
`

const Line = styled.div`
  background: ${props => props.theme.text};
  border-radius: 5px;
  height: 3px;
  transition: transform 350ms ease-out;
  &.start {
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  &.end {
    transition: width 300ms ease-out, transform 250ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
`

const LogoWrapper = styled(PageLink)`
  min-width: 9.25rem;
  max-width: 11.25rem;
  top: -1.75rem;
`

const MenuButton = ({ status, theme, onClick }) => (
  <Button
    className={`menu-button ${status} absolute flex flex-col justify-between cursor-pointer z-9999`}
    theme={theme}
    onClick={onClick}
  >
    <Line className='half start w-3/5' theme={theme} />
    <Line className='w-full' theme={theme} />
    <Line className='half end w-3/5 self-end' theme={theme} />
  </Button>
)
MenuButton.propTypes = {
  status: PropTypes.string,
  theme: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}


class Nav extends React.Component {

  state = {
    panelVisible: false,
  }

  toggleMenuPanel = () => {
    if (this.state.panelVisible)
      this.setState({ panelVisible: false })
    else
      this.setState({ panelVisible: true })
  }

  isPanelVisible = () => (this.state.panelVisible ? 'active' : '')

  render() {
    const { color, isMobile, theme, themeString, themeToggler, hasThemeSwitch } = this.props
    return (
      <StaticQuery query={menuQuery}
        render={data => (
          <Wrapper className='nav-wrapper relative block font-title h-0 top-0 inset-x-0 z-50'>
            <Fade top delay={250}>
              <div className='flex absolute w-full h-16 flex-wrap items-center justify-between p-4 pt-10 box-border z-999'>
                <LogoWrapper
                  className='relative'
                  to={data.site.siteMetadata.menuLinks[0].link}
                  color={theme.accent}
                >
                    <GatsbyImage
                      className='logo-image'
                      image={data.logo.childImageSharp.gatsbyImageData}
                      alt='logo'
                    />
                </LogoWrapper>
                {isMobile ? (
                  <MenuButton
                    status={this.isPanelVisible()}
                    theme={theme}
                    onClick={this.toggleMenuPanel}
                  />
                ) : (
                  <Navbar className='absolute'>
                    <ul className='menu flex relative bg-transparent w-full font-title text-right list-reset m-0 md:mr-4 lg:mr-8 z-999'>
                      {data.site.siteMetadata.menuLinks.map((item) => (
                          <MenuItem key={item.name} className='inline-menu inline-block text-lg cursor-pointer py-0 px-3 z-999'>
                            <PageLink
                              className='font-normal no-underline border-none'
                              color={color}
                              to={item.link}
                            >{item.name}</PageLink>
                          </MenuItem>
                        )
                      )}
                      {hasThemeSwitch ? (
                        <ThemeSwitcher theme={theme} themeString={themeString} themeToggler={themeToggler} />
                      ) : null}
                    </ul>
                  </Navbar>
                )}
              </div>
            </Fade>
            {isMobile ? (
              <MenuPanel className={`${this.isPanelVisible()} menu-panel fixed text-left w-screen min-h-screen top-0 right-0 p-8`} theme={theme}>
                {data.site.siteMetadata.menuLinks.map((item) => (
                    <MenuItem className='relative block text-lg my-0 ml-0 mr-auto p-0 pb-4 z-999 cursor-pointer' key={item.name}>
                      <PageLink
                        className='font-bold hover:text-black no-underline border-none'
                        color={color}
                        to={item.link}
                      >
                        {item.name}
                      </PageLink>
                    </MenuItem>
                  )
                )}
              </MenuPanel>
            ) : null }
          </Wrapper>
        )}
      />
    )
  }
}

Nav.defaultProps = {
  logo: true,
  isMobile: false,
}
Nav.propTypes = {
  logo: PropTypes.bool,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  hasThemeSwitch: PropTypes.bool,
  theme: PropTypes.shape({
    accent: PropTypes.string,
  }),
  themeString: PropTypes.string,
  themeToggler: PropTypes.func,
}

export default Nav

const menuQuery = graphql`{
  site {
    siteMetadata {
      menuLinks {
        name
        link
        external
      }
    }
  }
  logo: file(name: {eq: "logo"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
}
`
