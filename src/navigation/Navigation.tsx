import React, { useState } from 'react';
import styled from 'styled-components';
import UpperMenu from './UpperMenu';
import LowerMenu from './LowerMenu';
import { withRouter } from 'react-router';

const Shade = styled.div`
  background: black;
  position: absolute;
  z-index: 97;
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
`;

const Navigation = ({ location }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  return (
    <>
      <UpperMenu setMenuOpen={isHome ? null : () => setMenuOpen(x => !x)} />
      {(isMenuOpen || isHome) && (
        <>
          <LowerMenu key={location.pathname} hideMenu={() => setMenuOpen(false)} />
          {!isHome && <Shade />}
        </>
      )}
    </>
  );
};

export default withRouter(Navigation);
