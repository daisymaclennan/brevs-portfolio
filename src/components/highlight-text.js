import React from 'react'
import styled from 'styled-components'

const HighlightText = styled.span`
  color: ${props => props.theme.colors.highlight};

  ${props => props.box && `
    box-shadow: inset 0 -1.6em ${props.theme.colors.titleShape};
  `}
`

export default HighlightText
