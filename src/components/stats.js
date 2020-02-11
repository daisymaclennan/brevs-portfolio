import React from 'react'
import styled from 'styled-components'

const Stats = ({ className, stats }) => (
  <div className={ className }>
    <div className="grid">
      {stats.map(stat => (
        <div className="grid-item" key={stat}>
          <span>{stat[0]}</span>
          <span>{stat[1]}</span>
        </div>
      ))}
    </div>
  </div>
)

const StyledStats = styled(Stats)`
  display: grid;
  background: #000000;
  color: #FFFFFF;
  text-align: center;

  width: 100vw;

  .grid{
    display: grid;
  }

  .grid-item{
    display: flex;
    flex-direction: column;
  }

  span:first-of-type{
    font-size: calc(64px + (88 - 64) * ((100vw - 300px) / (2000 - 300)));
    line-height: 100%;
  }

  span:last-of-type{
    font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (2000 - 300)));
  }

  @media screen and (max-width: 1000px){
    padding-top: 70px;
    padding-bottom: 70px;
    margin-left: -16px;
    grid-column-start: 1;
    grid-column-end: 5;

    .grid{
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 60px;
    }

  }

  @media screen and (min-width: 1000px){
    padding-top: 130px;
    padding-bottom: 130px;

    grid-column-start: 1;
    grid-column-end: 13;

    margin-left:-30px;

    .grid{
      margin-left: auto;
      margin-right: auto;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 50px;
      grid-row-gap: 130px;
    }
  }
`

export default StyledStats
