import React from 'react'
import styled from 'styled-components'

const Tagline = styled.h2`
  color: ${props => props.theme.colors.paragraph};

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 2;
    grid-column-end: 11;
  }
`

export default Tagline
