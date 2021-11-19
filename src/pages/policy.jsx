import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'


const PolicyPage = ({ location }) => {
  const { cookieMonster } = useStaticQuery(policyQuery)
  const [themeString, themeToggler] = useDarkMode()
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <div className='relative w-full h-auto my-0 mx-auto'>
        <div className='flex flex-col relative justify-center items-center w-7/10 max-w-xl h-auto mx-auto my-0 pt-12 pb-0'>
            <h1 className='font-black text-6xl sm:text-7xl md:text-8xl text-center leading-tighter w-9/10 mt-16'>
                Privacy Policy
            </h1>
            <span className='flex relative justify-center items-center text-xl text-center font-normal leading-normal tracking-tight mx-auto mt-6 mb-auto pt-4 pb-12'>
                Cookie Monster loves cookies.
            </span>
        </div>
        <Image
          className='w-screen h-auto mx-auto'
          fluid={cookieMonster.childImageSharp.fluid}
          alt='Cookie Monster Loves Cookies'
        />
      </div>
    </Layout>
  )
}
PolicyPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PolicyPage

const policyQuery = graphql`
  query {
    cookieMonster: file(name: {eq: "cookie-monster"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
