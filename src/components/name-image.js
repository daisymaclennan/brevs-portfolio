import React from 'react'
import styled from 'styled-components'
import GridLayout from './grid-layout'
import {useSpring, animated} from 'react-spring'

const NameImage = ({ className }) => {
  const [props, set, stop] = useSpring(() => ({marginLeft: "100px"}))
  // Stop animation
  return(
    <GridLayout className={ className } onWheel={() => {
      console.log(window.scrollY)
      set({marginLeft: `${window.scrollY + 100 * 0.8}px`})
    }}>
      <div className="background">
        <img className="person" src="/images/man-pic.png" alt="Man looking away casually" />
      </div>
      <div className="text">
        <div className="mask">
          <animated.h2 style={props}>Jack</animated.h2>
        </div>
        <h2 className="ontop-text">Bretherick</h2>
      </div>
    </GridLayout>
  )
}

const StyledNameImage = styled(NameImage)`
  margin-left: 0;
  margin-right: 0;
  color: #FFFFFF;
  position: relative;

  h2{
    font-size: calc(112px + (372 - 112) * ((100vw - 300px) / (2000 - 300)));
  }

  .background{
    background-color: ${props => props.theme.colors.backgroundShapes};
  }

  .mask > h2{
    -webkit-text-stroke: 1px white;
    color: rgba(255, 255, 255, 0);
  }

  @media screen and (max-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 5;

    .background{
      grid-column-start: 2;
      grid-column-end: 5;
      display: block;
      width: 100%;
      height: 100vh;
    }

    img{
      position: absolute;
      object-fit: cover;
      height: calc(100vh - 60px);
      width: calc(100% + calc(90px + var(--columnWidth)));
      transform: translate(calc(-1 * calc(63px + var(--columnWidth))), 60px);
      z-index: 0;
      object-position: center;
    }

    .text{
      grid-column-start: 1;
      grid-column-end: 5;
      width: 100%;
      z-index: 5;
      margin-top: calc(-1 * calc(100vh - 60px));
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 50px;
    }
    .text > h2{
      word-wrap: break-word;
    }
  }

  @media screen and (min-width: 1000px){
    grid-column-start: 1;
    grid-column-end: 13;

    .background{
      grid-column-start: 2;
      grid-column-end: 13;
      display: block;
    }

    img{
      width: calc(100% + 32px);
      margin-right: -31px;
      margin-left: calc(30px + var(--columnWidth));
      margin-bottom: -5vw;
      grid-column-start: 3;
      grid-column-end: 13;
      margin-top: 5vw;
      z-index: 1;
      object-fit: cover;
    }

    .mask{
      position: absolute;
      width: calc(349px + calc(10 * var(--columnWidth)));
      height: 100%;
      grid-row-start: 1;
      grid-row-end: 2;
      left: calc(62px + calc(2 * var(--columnWidth)));
      top: 5vw;
      mask-image: url(/images/mask-image2.png);
      mask-repeat: no-repeat;
      mask-size: cover;
      margin-left: -5px;
    }

    .mask > h2{
      margin-top: 5vw;
      margin-left: 100px;
      -webkit-text-stroke: 1px white;
      color: rgba(255, 255, 255, 0);
    }

    .ontop-text{
      position: absolute;
      left: calc(62px + calc(2 * var(--columnWidth)));
      bottom: 0;
      margin-left: 250px;
    }
  }
`

export default StyledNameImage


/*<img src="/images/man-pic.png" alt="Jack looking away casually" />*/
//min-height: calc(100px + calc(calc(10 / 3) * var(--columnWidth)));
