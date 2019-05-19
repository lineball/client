import React, { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import { device } from '../device';

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
  @media ${device.tablet} {
    margin-top: -4vh;
    right:15vh;
   }
  @media ${device.mobileS} {
    margin-top: -4vh;
    font-size:1.5rem;
    right:5vh;
   }
   @media ${device.mobileM} {
    margin-top: -4vh;
    font-size:1.5rem;
    right:8vh;
   }
   @media ${device.mobileL} {
    margin-top: -4vh;
    font-size:1.5rem;
    right:9vh;
   }
`;

const UserName = styled.span`{}`;

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

const HamburgerCnt = styled.div`
.container {
  background-color: white;
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}     
`;


type Props = {
  setMenuOpen: () => void;
};

const UpperMenu = ({ setMenuOpen }: Props): ReactElement => (
  <Styled>
    <HamburgerCnt onClick={setMenuOpen}>
      <div className="container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </HamburgerCnt> 
    <UserName>User</UserName>
    {/* {setMenuOpen && <MenuIcon onClick={setMenuOpen} />} */}
  </Styled>
);
export default UpperMenu;
