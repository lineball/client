import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const LogoContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 5vw;
  padding: 10px;
  margin: auto;
`;

const NavigationLogo = (): ReactElement => (
  <LogoContainer>
    <Logo key="navigation" width="80px" colors={['gray', 'white', 'white', 'gray']} />
  </LogoContainer>
);
export default NavigationLogo;
