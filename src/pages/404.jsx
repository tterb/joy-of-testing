import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'
// Images
import FourOhFour from '../images/FourOhFour.svg'
import FourOhFourDark from '../images/FourOhFourDark.svg'


const Wrapper = styled.div`
  ${tw`relative w-full h-auto my-0 mx-auto`}
  z-index: -999;
`

const ContentWrapper = styled.div`
    ${tw`flex flex-col relative justify-center items-center w-7/10 max-w-xl h-auto mx-auto my-0 py-12`}
    top: 18vh;
`

const Subtitle = styled.span`
    ${tw`flex relative justify-center items-center text-4xl text-center font-normal leading-normal tracking-tight mx-auto my-0 pt-4 pb-12`}
`

const FourOhFourPage = () => {
  const [themeString, themeToggler] = useDarkMode()
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <Wrapper>
        <ContentWrapper>
            {themeString === 'dark' ?
                <FourOhFourDark width='85%' />
                : <FourOhFour width='85%' />
            }
            <Subtitle>We don't make mistakes, we just have happy accidents.</Subtitle>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default FourOhFourPage
