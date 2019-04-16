import React, { ReactElement, useEffect } from 'react';
import { FullPage } from '../styles';
import { animated, useSpring } from 'react-spring';
import Logo from '../logo/Logo';

const calc = (x: number, y: number): [number, number] => [
  ((x - window.innerWidth / 2) * 60) / window.innerWidth,
  ((y - window.innerHeight / 2) * 60) / window.innerHeight
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transform: any = (x: number, y: number): string => `rotateX(${-y}deg) rotateY(${x}deg)`;

type SpringValues = {
  xy: [number, number];
};

const Home = (): ReactElement => {
  const [spring, set] = useSpring((): SpringValues => ({ xy: [0, 0] }));

  useEffect(
    (): (() => void) => {
      const handle = ({ clientX, clientY }: MouseEvent): void => set({ xy: calc(clientX, clientY) });
      window.addEventListener('mousemove', handle);
      return (): void => {
        window.removeEventListener('mousemove', handle);
      };
    }
  );

  return (
    <FullPage>
      <animated.div style={{ transform: spring.xy.interpolate(transform) }}>
        <Logo width="50vw" />
      </animated.div>
    </FullPage>
  );
};

export default Home;
