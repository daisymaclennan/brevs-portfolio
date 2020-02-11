import React from 'react'
import styled from 'styled-components'
import MenuButton from './menu-button'
import ThemeButtons from './theme-buttons'

const FixedHeader = ({ className, theme, changeTheme }) => (
  <div className={ className }>
    <ThemeButtons theme={ theme } changeTheme={ changeTheme }/>
    <MenuButton />
  </div>
)

const StyledFixedHeader = styled(FixedHeader)`
  position: fixed;
  z-index: 5;

  @media screen and (max-width: 1000px){
    top: 20px;
    right: 16px;
  }

  @media screen and (min-width: 1000px){
    top: 50px;
    right: 30px;
    display: flex;
  }
`

export default StyledFixedHeader
