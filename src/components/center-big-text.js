import React from 'react'
import styled from 'styled-components'

const CenterBigText = styled.div`
  p{
    color: ${props => props.theme.colors.paragraph};
    opacity: 0.8;
    display: block;
  }
  @media screen and (min-width: 1000px){
    margin-top: 700px;
    margin-bottom: 125px;
    font-size: 32px;
    line-height: 200%;

    grid-column-start: 4;
    grid-column-end: 10;

    p + p{
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1000px){
    margin-top: 70px;
    margin-bottom: 70px;
    font-size: 18px;
    line-height: 200%;

    grid-column-start: 1;
    grid-column-end: 5;

    p + p{
      margin-top: 20px;
    }
  }
`

export default CenterBigText
