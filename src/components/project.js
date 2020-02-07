import React from 'react'
import styled from 'styled-components'
import GridLayout from './grid-layout'

const Project = ({ className, title, description, image}) => (
  <GridLayout className={ className }>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <img src={`/images/${image}`} alt={`Screenshot of ${title} project`}/>
  </GridLayout>
)

const StyledProject = styled(Project)`
margin-left: 0px;
margin-right: 0px;
margin-top: 60px;
  h3, p{
    color: ${props => props.theme.colors.paragraph};
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;
    div{
      grid-column-start: 1;
      grid-column-end: 5;
    }
    h3{
      font-size: 40px;
      margin-bottom: 30px;
    }

    p{
      font-size: 18px;
      line-height: 200%;
      margin-bottom: 60px;
    }

    img{
      margin-left: -16px;
      margin-right: -16px;
      border-top: 16px solid black;
      border-left: 17px solid black;
      border-right: 17px solid black;
      grid-column-start: 1;
      grid-column-end: 5;
      width: 100%;
    }
  }

  @media screen and (min-width: 1000px){
    div{
      grid-column-start: 2;
      grid-column-end: 8;
      margin-top: auto;
      margin-bottom: auto;
    }

    h3{
      font-size: 80px;
      margin-bottom: 30px;
    }

    p{
      font-size: 32px;
      line-height: 200%;
    }

    img{
      /*Border should be bigger but looks better like this at the moment*/
      margin-top: -30px;
      margin-left: -30px;
      border-top: 30px solid black;
      border-left: 31px solid black;
      border-right: 31px solid black;
      width: 100%;
      grid-column-start: 9;
      grid-column-end: 13;
    }
  }
`

export default StyledProject
