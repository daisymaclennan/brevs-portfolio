import React from 'react'
import { animated, useSpring } from "react-spring";

const AnimatedNumber = ({ value }) => {
  const spring = useSpring({ from: { val: 0 }, to: { val: value } });

  return(
    <animated.span>
      {spring.val.interpolate(val => Math.floor(val))}
    </animated.span>
  )
}

export default AnimatedNumber


//
