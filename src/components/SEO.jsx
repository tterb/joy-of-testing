import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// Config
import site from '../../config/website'

const replaceTrailing = _path => _path.replace(/\/$/, ``)

const Head = props => {
  const { node, pathname, article, single, data } = props

  let title
  let description
  let image

  const { buildTime } = data.site
  const realPrefix = site.pathPrefix === '/' ? '' : site.pathPrefix
  const homeURL = `${site.siteUrl}${realPrefix}`
  const URL = `${site.siteUrl}${replaceTrailing(pathname) || realPrefix}`

  if (article) {
    const postMeta = node.frontmatter
    const postImage = postMeta.cover.childImageSharp.gatsbyImageData.src
    title = `${postMeta.title} | ${site.siteTitle}`
    description = node.frontmatter.description
    image = `${homeURL}${postImage}`
  } else {
    title = site.siteTitle
    description = site.siteDescription
    image = `${homeURL}${site.siteLogo}`
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: URL,
    headline: site.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: URL,
    description: site.siteDescription,
    name: site.siteTitle,
    author: {
      '@type': 'Person',
      name: site.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: site.author,
    },
    copyrightYear: '2018',
    creator: {
      '@type': 'Person',
      name: site.author,
    },
    publisher: {
      '@type': 'Person',
      name: site.author,
    },
    datePublished: '2019-01-07T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/about`,
        name: 'About',
      },
      position: 2,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: site.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: site.author,
      },
      copyrightYear: node.parent.birthtime,
      creator: {
        '@type': 'Person',
        name: site.author,
      },
      publisher: {
        '@type': 'Organization',
        name: site.author,
        logo: {
          '@type': 'ImageObject',
          url: `${homeURL}${site.siteLogo}`,
        },
      },
      datePublished: node.parent.birthtime,
      dateModified: node.parent.mtime,
      description,
      headline: title,
      inLanguage: 'en',
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
          '@id': URL,
          name: title,
      },
      position: 3,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <Helmet>
      <html lang={site.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="gatsby-starter" content="Gatsby Starter Portfolio Emma" />
      <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="shortcut icon" href="favicons/favicon.png" />
      <meta name="msapplication-TileColor" content="#e3c05d" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta property="og:locale" content={site.ogLanguage} />
      <meta property="og:site_name" content={site.ogSiteName ? site.ogSiteName : ''} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={article ? 'article' : 'site'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="fb:app_id" content={site.siteFBAppID ? site.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.userTwitter ? site.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

const SEO = props => (
  <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />
)

export default SEO

Head.propTypes = {
  pathname: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  node: PropTypes.object,
  article: PropTypes.bool,
  single: PropTypes.bool,
}

Head.defaultProps = {
  node: null,
  article: false,
  single: false,
}

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`
