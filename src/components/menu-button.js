import React from 'react'
import styled from 'styled-components'

const MenuButton = ({ className }) => (
  <button className={ className }>
    <span className="menu-text">Menu</span>
    <div>
      <span></span>
      <span></span>
    </div>
  </button>
)

const StyledMenuButton = styled(MenuButton)`
  height: 14px;
  display: flex;
  border: 0;

  background-color: rgba(0, 0, 0, 0);

  span{
    color: ${props => props.theme.colors.menuButton};
  }

  span:first-of-type{
    font-size: 16px;
    margin-right: 10px;
  }

  div{
    width: 20px;
    height: 14px;
    position: relative;
  }

  div > span{
    width: 20px;
    height: 2px;
    display: block;
    background: ${props => props.theme.colors.menuButton};
    position: absolute;
  }

  div > span:first-of-type{
    top: 2px;
    left: 0;
  }

  div > span:last-of-type{
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 1000px){
    margin-left: 130px;
  }
`

export default StyledMenuButton
