import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'
// Images
import FourOhFour from '../images/FourOhFour.svg'
import FourOhFourDark from '../images/FourOhFourDark.svg'


const Wrapper = styled.div`
  z-index: -999;
`

const ContentWrapper = styled.div`
  top: 18vh;
`

const FourOhFourPage = ({ location }) => {
  const [themeString, themeToggler] = useDarkMode()
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <Wrapper className='relative w-full h-auto my-0 mx-auto'>
        <ContentWrapper className='flex flex-col relative justify-center items-center w-7/10 max-w-xl h-auto mx-auto my-0 py-12'>
            {themeString === 'dark' ?
                <FourOhFourDark width='85%' />
                : <FourOhFour width='85%' />
            }
            <span className='flex relative justify-center items-center text-4xl text-center font-normal leading-normal tracking-tight mx-auto my-0 pt-4 pb-12'>We don't make mistakes, we just have happy accidents.</span>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}
FourOhFourPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default FourOhFourPage
