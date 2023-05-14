import React, { useEffect, useState } from 'react'

import { useSpring, animated } from 'react-spring'
import  Flippersound  from "../../../public/assets/sounds/FlipperSound.mp3"
const Logo = () => {
  const [show, setShow] = useState(false)
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 1000 },
  })

  useEffect(() => {
    setShow(true)
    const audio = new Audio(Flippersound);
    audio.currentTime = 0;
    audio.play();
  
  }, [])

  return (
    <animated.img
      style={animation}
      src='assets/images/Flipper.png'
      alt='Logo'
    />
  )
}


export default Logo
