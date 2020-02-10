import React from 'react'
import styled from 'styled-components'
import GridLayout from './grid-layout'

const NameImage = ({ className }) => (
  <GridLayout className={ className }>
    <img className="background" src="/images/background-square.png" alt="Background shape" />
    <img className="person" src="/images/man-pic.png" alt="Man looking away casually" />
    <div>
      <h2>Jack</h2>
      <h2>Bretherick</h2>
    </div>
  </GridLayout>
)

const StyledNameImage = styled(NameImage)`
  margin-left: 0;
  margin-right: 0;
  color: #FFFFFF;

  h2{
    font-size: calc(112px + (372 - 112) * ((100vw - 300px) / (2000 - 300)));
  }

  .background{
    opacity: 0.5;
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;
    height: 100vh;
    margin-right: -16px;

    .background{
      grid-column-start: 2;
      grid-column-end: 5;
      height: 64px;
      object-fit: cover;
      width: calc(100% + 17px);
    }

    .person{
      width: 100vw;
      height: calc(100vh - 64px);
      object-fit: cover;
      margin-left: -16px;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 5;
    }

    div{
      margin-top: auto;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 5;
      margin-bottom: 60px;

    }

    h2{
      grid-column-start: 1;
      grid-column-end: 5;
    }
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;
    position: relative;

    img{
      width: calc(100% + 31px);
      margin-right: -31px;
    }

    .background{
      grid-column-start: 2;
      grid-column-end: 13;
    }

    .person{
      grid-column-start: 3;
      grid-column-end: 13;
      margin-top: -50%;
      z-index: 1;
    }
  }
`

export default StyledNameImage


/*<img src="/images/man-pic.png" alt="Jack looking away casually" />*/
//min-height: calc(100px + calc(calc(10 / 3) * var(--columnWidth)));
