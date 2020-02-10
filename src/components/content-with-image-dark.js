import React from 'react'
import styled from 'styled-components'

const ContentWithImageDark = ({ className, title, content, image }) => (
  <div className={ className }>
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
    <img src={`/images/${image}`} />
  </div>
)

const StyledContentWithImageDark = styled(ContentWithImageDark)`
  background-color: #000000;
  color: #FFFFFF;

  p{
    opacity: 0.8;
  }
  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;
    margin-left: -17px;
    margin-right: -17px;
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;
    margin-left: -30px;
    margin-right: -32px;

    display: flex;
  }
`

export default StyledContentWithImageDark
