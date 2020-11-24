import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons'
// Contents
import QuoteData from '../contents/quotes.yaml'
// Images
import QuotationMark from '../images/quotation-mark.svg'


const Wrapper = styled.div`
  margin-top: -16rem;
`

const Quote = () => {

  const [quote, setQuote] = useState('')

  const leftIcon = {
    width: '3.5rem',
    height: 'auto',
    top: '-0.5rem',
    transform: 'rotate(-180deg)',
  }
  const rightIcon = {
    width: '3.5rem',
    height: 'auto',
    bottom: '-0.5rem',
    right: '0.5rem',
  }

  useEffect(() => {
    let isSubscribed = true
    let randomIndex = Math.floor(Math.random() * QuoteData.length)
    setQuote(QuoteData[randomIndex])
    return () => isSubscribed = false
  }, [])

  return (
    <Wrapper className='quote-wrapper flex flex-col items-center font-normal text-black text-opacity-70 h-2/5 mx-auto pt-0 pb-8'>
      <Parallax.Layer factor={0.25} offset={0.0} speed={-0.5}>
        <div className='relative flex w-4/5 lg:w-7/10 m-auto'>
          <QuotationMark className='absolute self-start height-auto opacity-25' style={leftIcon} />
          <h2 className='font-normal leading-tight m-auto px-16' style={{ fontSize: '3.5rem' }}>
            {quote}
          </h2>
          <QuotationMark className='absolute self-end height-auto opacity-25' style={rightIcon} />
        </div>
        <div className='flex flex-row w-7/10 lg:w-3/5 m-auto'>
          <h3 className='text-3xl font-normal text-center mt-8 ml-auto'>~ Bob Ross</h3>
        </div>
      </Parallax.Layer>
    </Wrapper>
  )
}

export default Quote