import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'


const Container = (props) => (
  <Parallax.Layer className='flex p-6 md:p-16 lg:p-24 justify-center items-center z-50' {...props}>
    {props.children}
  </Parallax.Layer>
)

const FluidContainer = (props) => (
  <Parallax.Layer className='flex justify-center items-center z-50' {...props}>
    {props.children}
  </Parallax.Layer>
)


export { Container, FluidContainer }
