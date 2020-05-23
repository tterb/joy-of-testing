import { useState, useEffect } from 'react';


function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }
  // Return non-descript default values
  return { width: 600, height: 1000 }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowDimensions
}


function getMobileState() {
  if (typeof window !== 'undefined') {
    const { width, height } = getWindowDimensions()
    return (width <= 500)
  }
  return false
}

export function isMobileViewport() {
  const [mobileState, setMobileState] = useState(getMobileState())

  useEffect(() => {
    function handleResize() {
      setMobileState(getMobileState())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return mobileState
}
