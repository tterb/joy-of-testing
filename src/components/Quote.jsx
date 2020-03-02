import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import { Container } from './Container'
// Contents
import QuoteData from '../contents/quotes.yaml'


const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center font-serif font-hairline h-full mx-auto pt-0 pb-8`}
  color: rgba(0,0,0,0.7);
  margin-top: -15rem;
`

const QuoteText = styled.h2`
  ${tw`text-4xl font-hairline text-center w-7/10 lg:w-3/5 m-auto`}
`

const AuthorWrapper = styled.div`
  ${tw`flex flex-row w-7/10 lg:w-3/5 m-auto`}
`

const QuoteAuthor = styled.h3`
  ${tw`text-3xl font-hairline text-center mt-4 ml-auto`}
`

const Quote = () => {
  let randomIndex = Math.floor(Math.random() * QuoteData.length)
  return (
    <Wrapper>
      <Parallax.Layer factor={0.25} offset={0.0} speed={-0.5}>
        <QuoteText>
          &quot;{QuoteData[randomIndex]}&quot;
        </QuoteText>
        <AuthorWrapper>
          <QuoteAuthor>~ Bob Ross</QuoteAuthor>
        </AuthorWrapper>
      </Parallax.Layer>
    </Wrapper>
  )
}

export default Quote