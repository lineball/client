import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import UpperMenu from './UpperMenu';
import LowerMenu from './LowerMenu';
import { RouteComponentProps, withRouter } from 'react-router';
import NavigationLogo from '../logo/NavigationLogo';

const Shade = styled.div`
  background: black;
  position: absolute;
  z-index: 97;
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
`;

type InnerProps = {
  location: Location;
};

type Props = InnerProps & RouteComponentProps;

const Navigation = ({ location }: Props): ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  useEffect((): void => {
    if (isHome) setMenuOpen(true);
  }, [isHome]);
  return (
    <>
      {!isHome && <NavigationLogo />}
      <UpperMenu setMenuOpen={(): void => setMenuOpen((x): boolean => !x)} />
      {isMenuOpen && (
        <>
          <LowerMenu key={location.pathname} hideMenu={(): void => setMenuOpen(false)} />
          {!isHome && <Shade />}
        </>
      )}
    </>
  );
};

export default withRouter(Navigation);
