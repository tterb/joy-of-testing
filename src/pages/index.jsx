import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons'
// Hooks
import useDarkMode from '../hooks/useDarkMode'
// Components
import Layout from '../components/Layout'
import Quote from '../components/Quote'
// Views
import Hero from '../views/Hero'
import Section from '../views/Section'


const Index = ({ location, pages }) => {
  const { painting } = useStaticQuery(homeQuery)
  const [themeString, themeToggler] = useDarkMode()
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

const homeQuery = graphql`
  query {
    painting: file(name: {eq: "hero-painting"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`