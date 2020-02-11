import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SideBar from './side-bar'
import FixedHeader from './fixed-header'
import lightTheme from '../themes/light'
import desktopStripes from './desktop-stripes'
import mobileStripes from './mobile-stripes'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  :root{
    --dark: ${props => props.theme.colors.background};
    --light: ${props => props.theme.colors.stripes};
  }

  *{
    margin: 0;
  }

  *:focus{
    outline: 0;
  }

  button{
    margin: 0;
    padding: 0;
  }

  body{
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: poppins, sans-serif;
    background-repeat: no-repeat;
    overflow-x: hidden;
    overflow-y: scroll;
    font-smooth: anti-aliasing;
  }

  h2{
    font-size: calc(48px + (124 - 48) * ((100vw - 300px) / (2000 - 300)));
    line-height: 112.5%;
  }

  h3{
    font-size: calc(112px + (372 - 112) * ((100vw - 300px) / (2000 - 300)));
    line-height: 112.5%;
  }

  h4{
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (2000 - 300)));
    line-height: 150%;
  }

  p{
    font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (2000 - 300)));
    line-height: 200%;
    margin-bottom: calc(32px + (64 - 32)* ((100vw -300px) / (2000 - 300)));
  }

  @media screen and (max-width: 1000px){
    :root{
      --widthWithoutColors: calc(100vw - 88px);
      --columnWidth: calc(var(--widthWithoutColors) /4);
    }

    body{
      background-image: ${mobileStripes};
    }
  }

  @media screen and (min-width: 1000px){
    :root{
      --widthWithoutColors: calc(100vw - 414px);
      --columnWidth: calc(var(--widthWithoutColors) /12);
    }

    body{
      background-image: ${desktopStripes};
    }
  }
`

const Layout = ({ children }) => {
  const [theme, changeTheme] = useState(lightTheme)
  return(
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jack Bretherick Portfolio</title>
        <link rel="canonical" href="https://jack-bretherick-portfolio.netlify.com/" />
      </Helmet>
      <ThemeProvider theme={ theme } >
        <GlobalStyle />
        <FixedHeader theme={ theme } changeTheme={ changeTheme }/>
        <SideBar />
        { children }
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout

/*background: ${props => props.theme.colors.background};*/
