import React from 'react'
import styled from 'styled-components'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

const ThemeButtons = ({ className, theme, changeTheme }) => {
  return(
    <div className={ className }>
      <button onClick={() => changeTheme( lightTheme )} aria-label="Light mode">
      </button>
      <button onClick={() => changeTheme( darkTheme )} aria-label="Dark mode">
      </button>
    </div>
  )
}

const StyledThemeButtons = styled(ThemeButtons)`
  width: 40px;
  height: 16px;
  display: flex;
  justify-content: space-between;

  button{
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: pink;
    border: 0;
  }

  button:first-of-type{
    background: #FFFFFF;
    ${props => props.theme === lightTheme && (
      `border: 1px solid #F22487;`
    )}
  }

  button:last-of-type{
    background: #000000;
    ${props => props.theme === darkTheme && (
      `border: 1px solid #F22487;`
    )}
  }

  @media screen and (max-width: 1000px){
    position: fixed;
    top: 20px;
    left: calc(50vw - 20px);
  }
`

export default StyledThemeButtons
