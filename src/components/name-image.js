import React from 'react'
import styled from 'styled-components'

const NameImage = ({ className }) => (
  <div className={ className }>
    <img src="/images/man-pic.png" alt="Man looking away casually" />
    <h2>Jack</h2>
    <h2>Bretherick</h2>
  </div>
)

const StyledNameImage = styled(NameImage)`
  h2{
    color: #FFFFFF;
  }

  .transparent{
    opacity: 0.5;
  }


  @media screen and (max-width: 1000px){
    position: absolute;
    top: 0; bottom: 0; left: 30px; right: 30px;


  }
`

export default StyledNameImage


/*<img src="/images/man-pic.png" alt="Jack looking away casually" />*/
//min-height: calc(100px + calc(calc(10 / 3) * var(--columnWidth)));
