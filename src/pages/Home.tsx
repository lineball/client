import React, { useEffect } from 'react';
import { FullPage } from '../styles';
import { useSpring, animated } from 'react-spring';
import Logo from '../logo/Logo';

const calc = (x: number, y: number): [number, number] => [
  ((x - window.innerWidth / 2) * 60) / window.innerWidth,
  ((y - window.innerHeight / 2) * 60) / window.innerHeight
];

const transform: any = (x: number, y: number) => `rotateX(${-y}deg) rotateY(${x}deg)`;

const Home = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0]
  }));

  useEffect(() => {
    const handle = ({ clientX: x, clientY: y }: MouseEvent) => set({ xy: calc(x, y) });
    window.addEventListener('mousemove', handle);
    return () => {
      window.removeEventListener('mousemove', handle);
    };
  });

  return (
    <FullPage>
      <animated.div style={{ transform: props.xy.interpolate(transform) }}>
        <Logo width="50vw" />
      </animated.div>
    </FullPage>
  );
};

export default Home;
