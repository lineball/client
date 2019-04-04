import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  //transform: rotate(-5deg) skew(-5deg);
  width: 100%;
`;

const menuItems = [
  { label: 'Game', path: '/game' },
  { label: 'Profile', path: '/game' },
  { label: 'Ranking', path: '/game' },
  { label: 'Settings', path: '/game' },
  { label: 'Credits', path: '/game' }
];

const Menu = () => {
  const trail = useTrail(menuItems.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 380 }
  });
  return (
    <StyledMenu>
      {trail.map(({ x, ...style }, index) => (
        <animated.div
          key={menuItems[index].label}
          style={{ transform: x.interpolate(x => `translate3d(${x}px,0,0)`), marginRight: x, ...style }}
        >
          <MenuItem {...menuItems[index]} />
        </animated.div>
      ))}
    </StyledMenu>
  );
};

export default Menu;
