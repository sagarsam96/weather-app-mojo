import React from 'react'
import { BackgroundImage } from './Styled'

function RenderBGImage({backgroundImg}) {
  return (
      <>
      
    {!backgroundImg&&<BackgroundImage src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="Image Loading..."/>}
    
    {backgroundImg&&<BackgroundImage src={backgroundImg} alt="Image Loading..."/>}</>
  )
}

export default RenderBGImage