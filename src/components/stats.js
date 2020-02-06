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

  .grid{
    display: grid;
  }

  .grid-item{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1000px){
    padding-top: 130px;
    padding-bottom: 130px;

    width: 100vw;
    grid-column-start: 1;

    margin-left:-30px;

    .grid{
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      grid-template-columns: 1fr 1fr 1fr;
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
