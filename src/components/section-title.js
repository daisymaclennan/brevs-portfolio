import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.h3`
  display: block;
  white-space: nowrap;
  margin-top: 150px;
  color: ${props => props.theme.colors.titleSolid};
  @media screen and (min-width: 1000px){
    font-size: 372px;
    grid-column-start: 2;
  }

  @media screen and (max-width: 1000px){
    font-size: 112px;
    line-height: 100%;
  }
`

export default SectionTitle
