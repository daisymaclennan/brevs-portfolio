import React from 'react'
import styled from 'styled-components'

const Team = ({ className, team }) => (
  <div className={ className }>
    <div>
      <h5>UI</h5>
      {team.ui.map((member) => (
        <p key={member}>{member}</p>
      ))}
    </div>
    <div>
      <h5>UX</h5>
      {team.ux.map((member) => (
        <p key={member}>{member}</p>
      ))}
    </div>
    <div>
      <h5>Dev</h5>
      {team.dev.map((member) => (
        <p key={member}>{member}</p>
      ))}
    </div>
    <div>
      <h5>Lead designer</h5>
      <p>{team.leadDesign}</p>
    </div>
    <div>
      <h5>Lead dev</h5>
      <p>{team.leadDev}</p>
    </div>
    <div>
      <h5>Agency</h5>
      <p>{team.agency}</p>
    </div>
    <div>
      <h5>Year</h5>
      <p>{team.year}</p>
    </div>
    <div>
      <h5>Website</h5>
      {team.website && (
        <a href={`${team.website}`}>See it live</a>
      )}
    </div>
  </div>
)

const StyledTeam = styled(Team)`
  background-color: ${props => props.theme.colors.backgroundShapes};
  display: grid;

  h5, p{
    color: ${props => props.theme.colors.paragraph};
  }

  p{
    opacity: 0.8;
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;

    margin-left: -17px;
    margin-right: -17px;

    grid-template-columns: 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 16px;

    padding-left: 17px;
    padding-right: 17px;
    padding-top: 60px;
    padding-bottom: 60px;

    h5{
      margin-bottom: 10px;
      line-height: 200%;
    }

    p{
      margin-bottom: 0;
    }

    p + p{
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;

    margin-left: -30px;
    margin-right: -30px;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 60px;
    padding-left: 50px;
    //padding-left: calc(62px + var(--columnWidth));
    padding-top: 120px;
    padding-bottom: 120px;

    h5{
      margin-bottom: 30px;
    }

    p{
      margin-bottom: 0;
    }

    p + p{
      margin-top: 20px;
    }
  }
`

export default StyledTeam
