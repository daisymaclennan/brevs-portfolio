import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SideBar from './side-bar'
import FixedHeader from './fixed-header'
import lightTheme from '../themes/light'
import desktopStripes from './desktop-stripes'
import mobileStripes from './mobile-stripes'

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
    font-family: poppins;
    background-repeat: no-repeat;
    overflow-x: hidden;
    overflow-y: scroll;
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
      <ThemeProvider theme={ theme } >
        <GlobalStyle />
        <FixedHeader theme={ theme } changeTheme={ changeTheme }/>
        <SideBar />

        { children }
      </ThemeProvider>
    </div>
  )
}

export default Layout

/*background: ${props => props.theme.colors.background};*/
