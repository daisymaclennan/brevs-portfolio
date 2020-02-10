import React from 'react'
import styled from 'styled-components'
import GridLayout from './grid-layout'

const Project = ({ className, title, description, image}) => (
  <GridLayout className={ className }>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <img src={`/images/${image}`} alt={`Screenshot of ${title} project`}/>
  </GridLayout>
)

const StyledProject = styled(Project)`
  margin-left: 0px;
  margin-right: 0px;

  h4, p{
    color: ${props => props.theme.colors.paragraph};
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;
    margin-top: 60px;

    div{
      grid-column-start: 1;
      grid-column-end: 5;
    }

    h4{
      margin-bottom: 30px;
    }

    p{
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
    grid-column-start: 1;
    grid-column-end: 13;
    margin-top: 30px;

    div{
      grid-column-start: 2;
      grid-column-end: 6;
      margin-top: 100px;
    }

    h4{
      margin-bottom: 30px;
    }

    p{
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
      grid-column-start: 7;
      grid-column-end: 13;
    }
  }
`

export default StyledProject
