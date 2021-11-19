import React from 'react'
import PropTypes from 'prop-types'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'
import AwesomeLink from '../components/AwesomeLink'


const PolicyPage = ({ location }) => {
  const [themeString, themeToggler] = useDarkMode()
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <div className='relative w-full h-auto my-0 mx-auto'>
        <div className='flex flex-col relative justify-center items-center w-7/10 max-w-xl h-auto mx-auto my-0 py-12'>
            <h1 className='font-black text-6xl sm:text-7xl md:text-8xl leading-tighter w-9/10 my-0'>
                Privacy Policy
            </h1>
            <span className='flex relative justify-center items-center text-xl text-center font-normal leading-normal tracking-tight mx-auto my-0 pt-4 pb-12'>
                A big strong tree needs big strong roots. It's hard to see things when you're too close. Take a step back and look. In nature, dead trees are just as normal as live trees. We'll paint one happy little tree right here. Isn't that fantastic? You can just push a little tree out of your brush like that. If you hypnotize it, it will go away.<br />
                I guess I'm a little <AwesomeLink>weird</AwesomeLink>. I like to talk to trees and animals. That's okay though; I have more fun than most people. We don't want to set these clouds on fire. Isn't it fantastic that you can change your mind and create all these happy things? Learn when to stop. We don't have anything but happy trees here. Maybe there's a happy little bush that lives right there.
            </span>
        </div>
      </div>
    </Layout>
  )
}
PolicyPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PolicyPage
