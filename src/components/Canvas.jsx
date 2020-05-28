import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import CanvasDraw from 'react-canvas-draw'
// Icons
import Eraser from '../images/eraser.svg'
import Save from '../images/save.svg'
import Trash from '../images/trash.svg'

const CanvasArea = styled(CanvasDraw)`
  ${tw`absolute pin-t`}
  width: 100vw !important;
  height: 50vh;
`

const Interface = styled.div`
  ${tw`absolute flex flex-col w-16 z-999`}
  height: 50vh;
  right: 1rem;
`
const ButtonWrapper = styled.div`
  ${tw`relative flex flex-col m-auto mb-6`}
`

const UiButton = styled.button`
  ${tw`w-12 h-12 rounded-full border-none mt-4 p-1 cursor-pointer`}
  background: rgb(255,255,255);
  outline: none;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  transition: all 250ms;
  svg {
    ${tw`cursor-pointer opacity-50`}
  }
  &:hover {
    box-shadow: 0 6px 12px -2px rgba(0,0,0,0.2);
    svg {
      ${tw`opacity-75`}
    }
  }
`

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brushRadius: 12,
      isErasing: false,
    }
    this.canvas = null
    this.setCanvasRef = (element) => {
      this.canvas = element;
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleErase = this.toggleErase.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined')
      document.addEventListener('keydown', this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPressed.bind(this));
  }

  onKeyPressed(evt) {
    let brushRadius = this.state.brushRadius
    if(evt.keyCode === 219) {
      brushRadius--
    } else if (evt.keyCode === 221) {
      brushRadius++
    }
    console.log(evt.keycode)
    this.setState({
      brushRadius,
    })
  }

  handleClear() {
    this.canvas.clear()
  }

  handleSave() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'JOTSavedCanvas',
        this.canvas.getSaveData()
      )
    }
  }

  toggleErase() {
    this.setState(prevState => ({
      isErasing: !prevState.isErasing,
    }))
  }

  render() {
    const savedCanvas = (typeof window !== 'undefined' ? localStorage.getItem('JOTSavedCanvas') : undefined)
    let brushColor = this.state.isErasing ? '#FFFFFF' : this.props.brushColor
    return (
        <>
          <CanvasArea
            className='canvas'
            ref={canvas => (this.canvas = canvas)}
            brushColor={brushColor}
            brushRadius={this.state.brushRadius}
            catenaryColor={'#000'}
            lazyRadius={6}
            hideGrid={true}
            loadTimeOffset={0}
            saveData={savedCanvas}
            disabled={!this.props.isActive}
            {...this.props}
            tabIndex='0'
            onKeyDown={this.onKeyPressed}
          />
          {this.props.isActive ? (
            <Interface>
              <ButtonWrapper>
                <UiButton onClick={this.handleSave}>
                  <Save width='20px' height='20px' />
                </UiButton>
                <UiButton onClick={this.toggleErase}>
                  <Eraser width='24px' height='24px' />
                </UiButton>
                <UiButton onClick={this.handleClear}>
                  <Trash width='24px' height='24px' />
                </UiButton>
              </ButtonWrapper>
            </Interface>
          ) : null}
        </>
    )
  }
}

export default Canvas