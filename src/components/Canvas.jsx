import React from 'react'
import styled from 'styled-components'
import CanvasDraw from 'react-canvas-draw'
// Icons
import Eraser from '../images/icons/eraser.svg'
import Save from '../images/icons/save.svg'
import Trash from '../images/icons/trash.svg'
import EraserDark from '../images/icons/eraser-dark.svg'
import SaveDark from '../images/icons/save-dark.svg'
import TrashDark from '../images/icons/trash-dark.svg'

const CanvasArea = styled(CanvasDraw)`
  height: 50vh;
`

const Interface = styled.div`
  height: 50vh;
  right: 1rem;
`

const UiButton = styled.button`
  transition: all 250ms ease-in-out;
  svg {
    transition: all 250ms ease-in-out;
  }
`

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brushColor: props.brushColor,
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
    const eraserColor = this.props.theme !== 'dark' ? '#ffffffff' : '#1d1d20ff'
    this.setState(prevState => ({
      brushColor: prevState.isErasing ? this.props.brushColor : eraserColor,
      isErasing: !prevState.isErasing,
    }))
  }

  render() {
    const savedCanvas = (typeof window !== 'undefined' ? localStorage.getItem('JOTSavedCanvas') : undefined)
    const catenaryColor = this.props.theme !== 'dark' ? '#000' : '#fff'
    return (
        <>
          <CanvasArea
            className='canvas absolute w-screen top-0'
            ref={canvas => (this.canvas = canvas)}
            brushColor={this.state.brushColor}
            brushRadius={this.state.brushRadius}
            catenaryColor={catenaryColor}
            lazyRadius={6}
            hideGrid={true}
            loadTimeOffset={10}
            saveData={savedCanvas}
            disabled={!this.props.isActive}
            {...this.props}
            tabIndex='0'
            onKeyDown={this.onKeyPressed}
          />
          {this.props.isActive ? (
            <Interface className='absolute flex flex-col w-16 z-999'>
              {this.props.theme !== 'dark' ? (
                <div className='button-wrapper relative flex flex-col m-auto mb-6'>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer' onClick={this.handleSave}>
                    <Save
                      width='20px'
                      height='20px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer' onClick={this.toggleErase}>
                    <Eraser
                      width='24px'
                      height='24px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer' onClick={this.handleClear}>
                    <Trash
                      width='24px'
                      height='24px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                </div>
              ) : (
                <div className='button-wrapper relative flex flex-col m-auto mb-6'>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer' onClick={this.handleSave}>
                    <SaveDark
                      width='20px'
                      height='20px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer active:border-none active:outline-none' onClick={this.toggleErase}>
                    <EraserDark
                      width='24px'
                      height='24px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                  <UiButton className='ui-button w-12 h-12 rounded-full border-none mt-4 p-1 outline-none cursor-pointer' onClick={this.handleClear}>
                    <TrashDark
                      width='24px'
                      height='24px'
                      className='cursor-pointer mx-auto opacity-50'
                    />
                  </UiButton>
                </div>
              )}
            </Interface>
           ) : null}
        </>
    )
  }
}

export default Canvas