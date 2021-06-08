import React from 'react'
import styled from 'styled-components'
// Icons
import { Github, Gatsby } from '@styled-icons/remix-fill'
// Config
import site from '../../config/website'


const Container = styled.div`
  background: ${({ theme }) => `${theme.footer}`};
  place-items: center;
`

const Title = styled.h2`
  font-size: 2.25rem;
`

const Text = styled.p`
  color: rgba(255,255,255,0.75);
`

const IconWrapper = styled.div`
  a svg {
    transition: all 250ms ease-in-out;
  }
`

const Disqus = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15">
    <path className="a" d="M8.29.5A7.61,7.61,0,0,0,.58,8a7.23,7.23,0,0,0,.7,3.11L0,14.15l3.31-.43a7.73,7.73,0,0,0,5,1.78A7.61,7.61,0,0,0,16,8,7.61,7.61,0,0,0,8.29.5ZM12.5,8a3.88,3.88,0,0,1-4.2,4H5.5V4H8.34A3.8,3.8,0,0,1,12.5,8Z" transform="translate(0 -0.5)"/>
    <path className="a" d="M8.37,6H7.54V10h.83a1.88,1.88,0,0,0,2-2V8A1.88,1.88,0,0,0,8.37,6Z" transform="translate(0 -0.5)"/>
  </svg>
)

const Footer = ({ theme }) => (
  <Container className='sticky grid w-full left-0 bottom-0 py-8 pb-7 z-0' theme={theme}>
    <div className='flex flex-row items-center font-sans text-left w-9/10 m-auto'>
      <div className='w-full'>
        <Title className='font-sans font-black text-white leading-none w-full md:w-7/10 mr-auto mt-0 mb-2'>The Joy of Testing</Title>
        <Text className='text-base w-full md:w-4/5 mr-auto'>We don't make mistakes, we just have happy accidents.</Text>
      </div>
      <IconWrapper className='inline-flex align-middle pt-1 pb-2'>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer">
          <Github className='text-white w-9 opacity-75 hover:opacity-100 mr-3' />
        </a>
        <a href={site.links.disqus} target="_blank" rel="noopener noreferrer">
          <Disqus className='text-white w-9 opacity-75 hover:opacity-100 mr-3' />
        </a>
        <a href={site.links.gatsby} target="_blank" rel="noopener noreferrer">
          <Gatsby className='text-white w-9 opacity-75 hover:opacity-100 mr-3' />
        </a>
      </IconWrapper>
    </div>
  </Container>
);

export default Footer
