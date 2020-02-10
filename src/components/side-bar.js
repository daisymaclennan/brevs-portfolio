import React from 'react'
import styled from 'styled-components'

const SideBar = ({ className }) => (
  <div className={ className }>
    <img src="/images/icon.png" alt="Logo" />
    <h1>Jack Bretherick UI/UX designer</h1>
  </div>
)

const StyledSideBar = styled(SideBar)`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};

  img{
    display: block;
  }

  h1{
    color: ${props => props.theme.colors.sideBarText};
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 1000px){
    top: 16px;
    left: 17px;
    padding-bottom: 15px;
    clip-path: polygon(0px 0px, 0px 350px, 32px 350px, 32px 0px);

    img{
      width: 32px;
      height: 32px;
      margin-bottom: 24px;
    }

    h1{
      font-size: 16px;
      line-height: 32px;
      height: 239px;
    }
  }

  @media screen and (min-width: 1000px){
    top: 32px;
    left: 31px;
    padding-bottom: 30px;
    clip-path: polygon(0px 0px, 0px 470px, 48px 470px, 48px 0px);

    img{
      width: 48px;
      height: 48px;
      margin-bottom: 30px;
    }

    h1{
      font-size: 24px;
      line-height: 48px;
      height: 358px;
    }
  }


`

export default StyledSideBar
