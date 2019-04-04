import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import Menu from './Menu';
import { throttle } from 'lodash';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  perspective: 1980px;
`;

const LogoContainer: any = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 0 0 30vw;
  width: 30vw;
  max-width: 30vw;
  transform-style: preserve-3d;
  transform: rotateX(${({ y }: any) => y}deg) rotateY(${({ x }: any) => x}deg);
  transition: 100ms;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 0 0 35vw;
  width: 35vw;
  max-width: 35vw;
`;

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const handleMouse = (event: MouseEvent) => {
      setMousePosition({
        x: Math.floor((event.clientX - width / 2) * 90) / width,
        y: Math.floor((event.clientY - height / 2) * 90) / height
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);
  return mousePosition;
};

const Home = () => {
  const { x, y } = useMousePosition();
  return (
    <Container>
      <MenuContainer />
      <LogoContainer x={x} y={-y}>
        <Logo width={'20vw'} />
      </LogoContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
};

export default Home;
