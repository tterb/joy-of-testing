import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons'
// Components
import Layout from '../components/Layout'
import Quote from '../components/Quote'
// Views
import Hero from '../views/Hero'
import Section from '../views/Section'
// Hooks
import useWindowDimensions from '../hooks/WindowDimensions'


const Index = () => {
  let pages = 1.0
  const { bobross, painting } = useStaticQuery(homeQuery)
  return (
    <Layout pages={pages} pathname={location.pathname}>
      <Parallax pages={pages}>
        <Hero factor={0.8} offset={0.5} speed={0.4} background={painting} bob={bobross} />
        <Section factor={1.2} offset={0.0} speed={0.6} background={'linear-gradient(to bottom, #fffdff 60%, transparent)'}>
          <Quote />
        </Section>
      </Parallax>
    </Layout>
  )
}

export default Index

const homeQuery = graphql`
  query {
    bobross: file(name: {eq: "bob-ross"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    painting: file(name: {eq: "hero-painting"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`