import { useState, useEffect, useCallback } from 'react'


const useTransition = (currentValue) => {

    const [value, setValue] = useState(currentValue);

	const transitionEnd = useCallback((evt) => {
        if (evt.target === window.document.body && evt.propertyName === 'background-color')
            setValue(mode => !mode)
	}, [])

	useEffect(() => {
		window.document.body.addEventListener('transitionend', transitionEnd)
		return () => window.document.body.removeEventListener('transitionend', transitionEnd)
	}, [transitionEnd])

	return value
}

export default useTransition
