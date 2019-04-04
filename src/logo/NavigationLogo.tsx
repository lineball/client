import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { colors } from '../styles';
const WhiteContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 5vw;
  background-color: white;
  padding: 3px;
  margin: auto;
`;

const BlackContainer = styled.div`
  background-color: ${colors.background};
  padding: 10px;
`;

const NavigationLogo = () => (
  <WhiteContainer>
    <BlackContainer>
      <Logo width="80px" />
    </BlackContainer>
  </WhiteContainer>
);
export default NavigationLogo;
