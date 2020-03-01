import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Wrapper = styled.div`
  ${tw`relative flex flex-col justify-end self-start w-full mt-0 mx-auto pt-16 px-0 overflow-hidden`}
  height: 50vh;
`

const Header = styled.div`
  ${tw`flex flex-col-reverse w-full`}
  height: 40vh;
  > div {
    padding-bottom: 28% !important;
  }
`

const TitleWrapper = styled.div`
  ${tw`flex flex-col justify-end self-start pt-16 px-9`}
`

const Title = styled.h1`
  ${tw`font-black m-6 mb-8`}
  color: rgba(0,0,0,0.75);
  font-size: 4.25rem;
  span {
    display: block;
    line-height: 0.9;
    .accent {
      display: inline-block;
      color: red;
    }
  }
`

const BlogHero = () => (
  <Wrapper>
    <Header>
      <Title>
        <span>Happy</span>
        <span>Little</span>
        <span>Trees<span className='accent'>.</span></span>
      </Title>
    </Header>
  </Wrapper>
)

export default BlogHero