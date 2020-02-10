import React from 'react'
import styled from 'styled-components'
import HighlightText from './highlight-text'

const Footer = ({ className }) => (
  <footer className={ className }>
    <h3>Find <HighlightText>Me</HighlightText></h3>
    <div>
      <a>Instagram</a>
      <a>Dribbble</a>
    </div>
    <img src="/images/icon--light.png" alt="Jacks logo" />
  </footer>
)

const StyledFooter = styled(Footer)`
  background-color: #111111;

  h3, a{
    color: #FFFFFF;
  }

  a{
    opacity: 0.8;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1000px){
    padding-left: 17px;
    padding-right: 17px;

    h3{
      text-align: left;
      padding-top: 60px;
      padding-bottom: 60px;
    }

    div{
      padding-bottom: 90px;
    }

    a{
      text-align: center;
      font-size: 48px;
      width: 100%;
    }

    a + a{
      margin-top: 30px;
    }

    img{
      height: 64px;
      width: 64px;
      display: block;
      padding-bottom: 90px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 1000px){
    text-align: center;

    h3{
      padding-top: 130px;
      padding-bottom: 130px;
    }

    div{
      margin-bottom: 190px;
    }

    a{
      font-size: 124px;
    }

    a + a {
      margin-top: 60px;
    }

    img{
      height: 80px;
      width: 80px;
      padding-bottom: 130px;
    }
  }
`

export default StyledFooter
