import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SideBar from './side-bar'
import FixedHeader from './fixed-header'
import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  *:focus{
    outline: 0;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: poppins;

    background: ${props => props.theme.colors.background};
  }

  button{
    margin: 0;
    padding: 0;
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
