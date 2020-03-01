import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons'

const Container = styled(Parallax.Layer)`
  ${tw`flex p-6 md:p-16 lg:p-24 justify-center items-center z-50`}
`

const FluidContainer = styled(Parallax.Layer)`
  ${tw`flex justify-center items-center z-50`}
`

export { Container, FluidContainer }
