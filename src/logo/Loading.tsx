import React, { useRef, useState } from 'react';
import { useSpring, animated, config, useChain } from 'react-spring';
import styled from 'styled-components';
import Logo from './Logo';
const Wrapper = styled(animated.div)`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

interface Props {
  onAnimationFinish: () => void;
}

const Loading = ({ onAnimationFinish }: Props) => {
  const [toggle, setToggle] = useState(false);

  const textProps = useSpring({
    from: {
      opacity: toggle ? 1 : 0
    },
    to: {
      opacity: toggle ? 0 : 1
    }
  });

  return (
    <Wrapper>
      <Logo onAnimationFinish={toggle ? onAnimationFinish : () => setToggle(true)} toggle={toggle} />
      <animated.div style={textProps}>{toggle ? 'loaded :)' : 'loading...'}</animated.div>
    </Wrapper>
  );
};

export default Loading;
