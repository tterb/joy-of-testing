import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gsap from 'gsap'
import { rgba } from 'polished'
// Icons
import { Moon, Sun } from '@styled-icons/boxicons-solid'

const Wrapper = styled.div`
	left: 0.75rem;
	height: 1.875rem;
`

const Base = styled.div`
	background: ${props => `${props.color}`};
	height: 1.875rem;
	box-shadow: inset 0px -1px 6px -2px rgba(0,0,0,0.2);
`

const Switch = styled.span`
	background: ${props => `${props.color}`};
	left: 2px;
	box-shadow: 1px 1px 8px -5px rgba(0,0,0,0.3);
`

const MoonIcon = styled(Moon)`
	color: ${props => `${props.color}`};
	left: -0.125rem;
`

const SunIcon = styled(Sun)`
	color: ${props => `${props.color}`};
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
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidUpdate() {
		const xPos = (this.props.themeString === 'dark' ? 29 : 0)
		this.updateSwitchPosition(xPos)
	}

	handleClick() {
		this.props.themeToggler()
	}

	updateSwitchPosition(xPos) {
		gsap.to(this.switch, 0.75, {
			x: xPos,
			transformOrigin: 'center',
			ease: 'power2',
		}).play()
	}

	render() {
		return (
			<Wrapper className='relative flex items-center justify-center w-15 top-0'>
				<Base
					className='relative flex items-center justify-between w-15 rounded-full p-2 cursor-pointer z-0'
					color={this.props.theme.switchBase}
					onClick={this.handleClick}
				>
					<MoonIcon
						className='relative w-5 h-5 z-5'
						color={this.colors.moon}
					/>
					<SunIcon
						className='relative w-5 h-5 z-5'
						color={this.colors.sun}
					/>
					<Switch
						className='absolute w-7 h-7 rounded-full cursor-pointer z-10'
						color={this.props.theme.switchColor}
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