import React from 'react'
import Styled from 'styled-components'

const FooterDiv = Styled.div`
margin: 10px;
padding: 10px;
`;


function Footer() {
  return (
    <FooterDiv>
        <hr/>
        <p> <strong>Instructions: </strong><span>Enter city name and tap search button, hover over the image to see the weather Info</span> </p>
    </FooterDiv>
  )
}

export default Footer