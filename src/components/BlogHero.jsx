import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import CanvasDraw from 'react-canvas-draw'
import Canvas from './Canvas'


const Wrapper = styled.div`
  ${tw`relative flex flex-col justify-end self-start w-full mt-0 mx-auto pt-16 px-0 overflow-hidden`}
  height: 50vh;
`

const Header = styled.div`
  ${tw`flex flex-col-reverse w-full`}
  height: 40vh;
`

const TitleWrapper = styled.div`
  ${tw`absolute flex flex-col justify-end self-start pin-b pt-16 px-9`}
`

const Title = styled.h1`
  ${tw`absolute font-black pin-b m-6 mb-8`}
  color: rgba(0,0,0,0.75);
  font-size: 4.25rem;
  span {
    display: block;
    line-height: 0.95;
  }
`

// const Canvas = styled(CanvasDraw)`
//   ${tw`absolute pin-t`}
//   width: 100vw !important;
//   height: 50vh;
// `

const Dot = styled.span`
  ${tw`relative rounded-full pointer z-999`}
  display: inline-block !important;
  content: '';
  width: 14px;
  height: 14px;
  margin-left: 0.125rem;
`

class BlogHero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      brushColor: '#000000',
      nextColor: '#F2433B',
      canvasVisible: false,
      viewWidth: 0,
      viewHeight: 0,
    }
    this.colors = [
      '#000000',  // black
      '#F2433B',  // red
      '#F48A02',  // orange
      '#F2C029',  // yellow
      '#2AAE4A',  // green
      '#15BBC5',  // teal
      '#3096DB',  // blue
      '#4449D0',  // indigo
      '#8F58E2',  // purple
      '#CF4B6C',  // pink
    ]
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ viewWidth: window.innerWidth, viewHeight: window.innerHeight });
  };

  handleClick() {
    let index = this.state.index+1
    this.setState({
      index,
      brushColor: this.colors[(index%this.colors.length)],
      nextColor: this.colors[(index+1)%this.colors.length],
      canvasVisible: true,
    })
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Canvas
            brushColor={`${this.state.brushColor}d0`}
            canvasWidth={this.state.viewWidth}
            canvasHeight={this.state.viewHeight/2}
            isActive={this.state.canvasVisible}
          />
          <Title className='blog-title'>
            <span>The Joy</span>
            <span>of Testing
              <Dot
                onClick={this.handleClick}
                style={{ background: this.state.nextColor }}
              />
            </span>
          </Title>
        </Header>
      </Wrapper>
    )
  }
}

export default BlogHero