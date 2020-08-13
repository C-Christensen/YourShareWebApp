import React from "react";
import { useSpring, animated } from 'react-spring';
// import icon from "../../images/YS_icon.png";
interface AnimatedProps {

}

const AnimatedFunc = (props: AnimatedProps) => {
  const springProps = useSpring({
    from: { opacity: 0, color: 'red' },
    to: { opacity: 1, color: '#ffaaee' },
    config: {duration : 4000},
    delay:1000,
  });
  return (
    <animated.div style={springProps}>
      <h1>Your Share</h1> 
    </animated.div>
  );
}

export default AnimatedFunc;