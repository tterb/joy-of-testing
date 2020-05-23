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

	const [toggleTheme, forceThemeToggle] = useState(false);
	const transitionEnd = useCallback((evt) => {
		const { target, propertyName } = evt;
		if (target === window.document.body && propertyName === 'color')
			forceThemeToggle(o => !o);
	}, [])

	useEffect(() => {
    window.document.body.addEventListener('transitionend', transitionEnd)
    return () => window.document.body.removeEventListener('transitionend', transitionEnd)
  }, [transitionEnd])

	return (
		<DisqusThread config={props.config} toggleTheme={toggleTheme} />
	)
}