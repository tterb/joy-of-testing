import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { TimelineMax } from 'gsap'
import { rgba } from 'polished'
// Icons
import { Moon, Sun } from '@styled-icons/boxicons-solid'

const Wrapper = styled.div`
	${tw`relative flex items-center justify-center`}
	top: 0;
	left: 0.75rem;
	width: 3.75rem;
	height: 1.875rem;
`

const Base = styled.div`
	${tw`absolute relative flex items-center justify-between rounded-full p-2 cursor-pointer z-0`}
	background: ${props => `${rgba(props.color, 0.15)}`};
	width: 3.75rem;
	height: 1.875rem;
	box-shadow: inset 0px -1px 6px -2px rgba(0,0,0,0.2);
`

const Switch = styled.span`
	${tw`absolute rounded-full cursor-pointer z-10`}
	background: ${props => `${props.color}`};
	width: 1.75rem;
	height: 1.75rem;
	left: 2px;
	box-shadow: 1px 1px 8px -5px rgba(0,0,0,0.3);
	transition: transform 0.2s linear;
`

const MoonIcon = styled(Moon)`
	${tw`relative z-5`}
	color: ${props => `${props.color}`};
	width: 1.25rem;
	height: 1.25rem;
	left: -0.125rem;
`

const SunIcon = styled(Sun)`
	${tw`relative z-5`}
	color: ${props => `${props.color}`};
	width: 1.25rem;
	height: 1.25rem;
	right: -0.125rem;
`

class ThemeSwitcher extends React.Component {
	constructor(props) {
		super(props)
		this.colors = {
			moon: '#ECF0F1',
			sun: '#F9C941',
		}
		this.switch = null
		this.tween = new TimelineMax({ paused: true })
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidUpdate() {
		const xPos = (this.props.themeString === 'dark' ? 28 : 0)
		this.updateSwitchPosition(xPos)
	}

	handleClick() {
		this.props.themeToggler()
	}

	updateSwitchPosition(xPos) {
		this.tween.to(this.switch, 0.5, {
			x: xPos,
			transformOrigin: 'center',
			ease: Power1.easeInOut,
		}).play()
	}

	render() {
		return (
			<Wrapper>
				<Base color={this.props.theme.switchBase}>
					<MoonIcon color={this.colors.moon} />
					<SunIcon color={this.colors.sun} />
					<Switch
						color={this.props.theme.switchColor}
						onClick={this.handleClick}
						ref={temp => (this.switch = temp)}
					/>
				</Base>
			</Wrapper>
		)
	}
}
ThemeSwitcher.propTypes = {
	theme: PropTypes.object.isRequired,
	themeString: PropTypes.string.isRequired,
	themeToggler: PropTypes.func.isRequired,
}

export default ThemeSwitcher