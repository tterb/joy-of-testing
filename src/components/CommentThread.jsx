import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Plugins
import { Disqus } from '../../plugins/gatsby-plugin-disqus'


const DisqusThread = styled(Disqus)`
  ${tw`w-full mx-auto pb-8`}
`

export default function CommentThread(props) {

  const [themeState, toggleTheme] = useState(false);

	const transitionEnd = useCallback((evt) => {
    if (evt.target === window.document.body && evt.propertyName === 'background-color')
      toggleTheme(mode => !mode)
	}, [])

	useEffect(() => {
		window.document.body.addEventListener('transitionend', transitionEnd)
		return () => window.document.body.removeEventListener('transitionend', transitionEnd)
	}, [transitionEnd])

	return (
    <DisqusThread
      config={props.config}
      theme={themeState.toString()}
    />
	)
}
CommentThread.propTypes = {
	config: PropTypes.shape({
		url: PropTypes.string.isRequired,
		identifier: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.string,
}