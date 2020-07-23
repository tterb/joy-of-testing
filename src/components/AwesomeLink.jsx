import React, { useEffect, useState } from 'react'
// Contents
import LinkData from '../contents/links.yaml'

const AwesomeLink = ({ children }) => {

  const [link, setLink] = useState('#')

  useEffect(() => {
    let isSubscribed = true
    let randomIndex = Math.floor(Math.random() * LinkData.length)
    setLink(LinkData[randomIndex])
    return () => isSubscribed = false
  }, [])


  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default AwesomeLink