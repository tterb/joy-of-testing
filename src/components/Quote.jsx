import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
// Contents
import QuoteData from '../contents/quotes.yaml'


const Wrapper = styled.div`
  /* ${tw`flex flex-col items-center justify-center font-serif font-hairline h-full mx-auto pt-0 pb-8`}
  color: rgba(0,0,0,0.7); */
  margin-top: -16rem;
`

// const QuoteText = styled.h2`
//   ${tw`text-4xl font-hairline text-center w-7/10 lg:w-3/5 m-auto`}
// `

// const AuthorWrapper = styled.div`
//   ${tw`flex flex-row w-7/10 lg:w-3/5 m-auto`}
// `

// const QuoteAuthor = styled.h3`
//   ${tw`text-3xl font-hairline text-center mt-4 ml-auto`}
// `

const Quote = () => {

  const [quote, setQuote] = useState('')

  useEffect(() => {
    let isSubscribed = true
    let randomIndex = Math.floor(Math.random() * QuoteData.length)
    setQuote(QuoteData[randomIndex])
    return () => isSubscribed = false
  }, [])

  return (
    <Wrapper className='quote-wrapper flex flex-col items-center justify-center font-serif font-hairline text-black text-opacity-70 h-full mx-auto pt-0 pb-8'>
      <Parallax.Layer factor={0.25} offset={0.0} speed={-0.5}>
        <h2 className='text-4xl font-hairline text-center w-7/10 lg:w-3/5 m-auto'>
          &quot;{quote}&quot;
        </h2>
        <div className='flex flex-row w-7/10 lg:w-3/5 m-auto'>
          <h3 className='text-3xl font-hairline text-center mt-4 ml-auto'>~ Bob Ross</h3>
        </div>
      </Parallax.Layer>
    </Wrapper>
  )
}

export default Quote