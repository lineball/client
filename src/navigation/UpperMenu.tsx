import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Styled = styled.div`
  position: absolute;
  top: 5vh;
  right: 5vh;
  background-color: white;
  z-index: 99;
  color: ${colors.background};
  font-size: 3rem;
  padding: 1rem;
  transition: 100ms;
`;

const UserName = styled.span``;
const MenuIcon = styled.span`
  :before {
    content: 'X';
  }
  :hover {
    color: red;
  }
  padding-left: 3rem;
  padding-right: 1rem;
`;

const UpperMenu = ({ setMenuOpen }: any) => (
  <Styled>
    <UserName>%USERNAME%</UserName>
    {setMenuOpen && <MenuIcon onClick={setMenuOpen} />}
  </Styled>
);

export default UpperMenu;
