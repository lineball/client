import React, { useMemo } from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';
import { colors } from '../styles';
import { withRouter } from 'react-router';

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  //transform: rotate(-5deg) skew(-5deg);
  width: 40vw;
  position: absolute;
  bottom: 5vh;
  right: 0;
  z-index: 99;
  color: ${colors.background};
  font-size: 3rem;
  overflow: hidden;
`;

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Game', path: '/game' },
  { label: 'Settings', path: '/settings' }
];

const LowerMenu = ({ hideMenu, location }: any) => {
  const currentMenuItems = useMemo(() => menuItems.filter(x => x.path !== location.pathname), []);
  const trail = useTrail(currentMenuItems.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 380 }
  });
  return (
    <Styled>
      {trail.map(({ x, ...style }, index) => (
        <animated.div
          key={currentMenuItems[index].label}
          style={{ transform: x.interpolate(x => `translate3d(${x}px,0,0)`), marginRight: x, ...style }}
        >
          <MenuItem {...currentMenuItems[index]} onClick={hideMenu} />
        </animated.div>
      ))}
    </Styled>
  );
};

export default withRouter(LowerMenu);
