import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const PageLink = (props) => {
  const label = props.label ? props.label : props.children
  return props.external ? (
    <a
      className={props.className}
      aria-label={label}
      href={props.to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.content ? props.content : props.children}
    </a>
  ) : (
    <Link
      className={props.className}
      aria-label={label}
      to={props.to}
    >
      {props.content ? props.content : props.children}
    </Link>
  )
}
PageLink.defaultProps = {
  external: false,
}
PageLink.propTypes = {
  external: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  content: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default PageLink

// import AniLink from 'gatsby-plugin-transition-link/AniLink'

// const PageLink = (props) => {
//   const label = props.label ? props.label : props.children
//   return (
//     <AniLink paintDrip
//       className={props.className}
//       hex={props.color}
//       duration={props.duration}
//       aria-label={label}
//       to={props.to}>
//       { props.children }
//     </AniLink>
//   )
// }

// PageLink.defaultProps = {
//   duration: 0.75,
//   color: '#EEEEEE',
// }
// PageLink.propTypes = {
//   className: PropTypes.string,
//   duration: PropTypes.number,
//   color: PropTypes.string,
//   label: PropTypes.string,
//   to: PropTypes.string.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// }

// export default PageLink
