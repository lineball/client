import React, { ReactElement, useMemo } from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';
import { colors } from '../styles';
import { RouteComponentProps, withRouter } from 'react-router';
import { Location } from 'history';

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

type InnerProps = {
  hideMenu: () => void;
  location: Location;
};
type Props = InnerProps & RouteComponentProps;

const LowerMenu = ({ hideMenu, location }: Props): ReactElement => {
  const currentMenuItems = useMemo(
    (): typeof menuItems => menuItems.filter((x): boolean => x.path !== location.pathname),
    []
  );
  const trail = useTrail(currentMenuItems.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 380 }
  });
  return (
    <Styled>
      {trail.map(
        ({ x, ...style }, index): ReactElement => (
          <animated.div
            key={currentMenuItems[index].label}
            style={{ transform: x.interpolate((n): string => `translate3d(${n}px,0,0)`), marginRight: x, ...style }}
          >
            <MenuItem {...currentMenuItems[index]} onClick={hideMenu} />
          </animated.div>
        )
      )}
    </Styled>
  );
};

export default withRouter(LowerMenu);
