import React from 'react'
import styled from 'styled-components'
import HighlightText from './highlight-text'

const Footer = ({ className }) => (
  <footer className={ className }>
    <h3>Find <HighlightText>Me</HighlightText></h3>
    <a>Instagram</a>
    <a>Dribbble</a>
  </footer>
)

const StyledFooter = styled(Footer)`
`

export default StyledFooter
