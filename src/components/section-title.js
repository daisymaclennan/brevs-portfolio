import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.h3`
  display: block;

  margin-top: 150px;
  color: ${props => props.theme.colors.titleSolid};
  @media screen and (min-width: 1000px){
    font-size: 372px;
    grid-column-start: 2;
    grid-column-end: 13;
    white-space: nowrap;
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;
    font-size: 112px;
    line-height: 100%;
  }
`

export default SectionTitle
