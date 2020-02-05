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
  display: flex;

  @media screen and (min-width: 800px){
    top: 50px;
    right: 30px;
  }
`

export default StyledFixedHeader
