import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
import useTransition from '../hooks/useTransition'
// Components
import Layout from '../components/Layout'
import Quote from '../components/Quote'
// Views
import Hero from '../views/Hero'
import Section from '../views/Section'
// Plugins
import { Recommendations } from '../../plugins/gatsby-plugin-disqus'


const Index = ({ location, pages }) => {
  const { painting } = useStaticQuery(homeQuery)
  const [themeString, themeToggler] = useDarkMode()
  const isDarkMode = themeString === 'dark'
  return (
    <Layout
      pathname={location.pathname}
      themeString={themeString}
      themeToggler={themeToggler}
    >
      <Parallax pages={pages}>
        <Hero
          background={painting}
          factor={0.8}
          offset={0.5}
          speed={0.4}
        />
        <Section
          className='quote-section'
          factor={1.2}
          offset={0.0}
          speed={0.6}
        >
          <Quote />
        </Section>
        <Section
          className='recommendations-section'
          factor={0.5}
          offset={0.5}
          speed={0.2}
        >
          <Recommendations
            className='w-full'
            theme={useTransition(isDarkMode).toString()}
          />
        </Section>
      </Parallax>
    </Layout>
  )
}
Index.propTypes = {
  location: PropTypes.object.isRequired,
  pages: PropTypes.number,
}
Index.defaultProps = {
  pages: 1.0,
}

export default Index

const homeQuery = graphql`{
  painting: file(name: {eq: "hero-painting"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`