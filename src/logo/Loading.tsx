import React, { ReactElement, useState } from 'react';
import { animated, useSpring } from 'react-spring';
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

type Props = {
  onAnimationFinish: () => void;
};

const Loading = ({ onAnimationFinish }: Props): ReactElement => {
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
      <Logo
        key="loading"
        onAnimationFinish={toggle ? onAnimationFinish : (): void => setToggle(true)}
        toggle={toggle}
      />
      <animated.div style={textProps}>{toggle ? 'loaded :)' : 'loading...'}</animated.div>
    </Wrapper>
  );
};

export default Loading;
