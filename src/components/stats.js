import React from 'react'
import styled from 'styled-components'

const Stats = ({ className, stats }) => (
  <div className={ className }>
    <div className="grid">
      {stats.map(stat => (
        <div className="grid-item">
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

    span:first-of-type{
      font-size: 64px;
    }

    span:last-of-type{
      font-size: 18px;
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

    span:first-of-type{
      font-size: 88px;
    }

    span:last-of-type{
      font-size: 32px;
    }
  }
`

export default StyledStats
