import React, { useRef } from 'react';
import { useSpring, animated, config, useChain } from 'react-spring';
import styled from 'styled-components';
import { colors } from './../styles';
const Wrapper = styled(animated.div)`
  display: flex;
  width: 100%;
  height: 210px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  flex: 0;
  z-index: 1;
`;

const TextContainer = styled.div`
  flex: 0;
  font-size: 120px;
  margin-left: -10px;
  z-index: 2;
`;

interface Props {
  onAnimationFinish: () => void;
}

const Logo = ({ onAnimationFinish }: Props) => {
  const farTrailRef = useRef(null);
  const farTrailProps = useSpring({
    from: { height: 0 },
    to: { height: 394 },
    ref: farTrailRef
  });

  const closeTrailRef = useRef(null);
  const closeTrailProps = useSpring({
    from: { y: 394 },
    to: { y: -10 },
    ref: closeTrailRef
  });

  const ballRef = useRef(null);
  const ballProps = useSpring({
    from: { fillOpacity: 0 },
    to: { fillOpacity: 1 },
    ref: ballRef
  });

  const containerHeightRef = useRef(null);
  const containerHeightProps = useSpring({
    to: { minHeight: '0vh' },
    from: { minHeight: '100vh' },
    ref: containerHeightRef
  });

  const sizeRef = useRef(null);
  const sizeProps = useSpring({
    to: { width: '200' },
    from: { width: '400' },
    ref: sizeRef,
    onRest: onAnimationFinish
  });

  useChain([farTrailRef, closeTrailRef, ballRef, containerHeightRef, sizeRef], [0, 0.38, 0.6, 0.8, 0.95]);

  return (
    <Wrapper style={containerHeightProps}>
      <LogoContainer>
        <animated.svg viewBox="-1 -1 645 394" width="400" style={sizeProps}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.logo.red} stopOpacity="1" />
              <stop offset="100%" stopColor={colors.logo.yellow} stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.logo.yellow} stopOpacity="1" />
              <stop offset="100%" stopColor={colors.logo.red} stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#aaa" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <mask id="farTrailMask" maskUnits="userSpaceOnUse">
              <animated.rect width="645" height="394" fill="white" style={farTrailProps} />
            </mask>
            <mask id="closeTrailAndBallMask" maskUnits="userSpaceOnUse">
              <animated.rect width="645" height="420" fill="white" style={closeTrailProps} y="394" />
            </mask>
          </defs>
          <path
            id="far-trail"
            d="M437.5 390C419.5 390 276 390 258 390C229.5 334 194 276.5 151 217C108 157.5 57.5 96 0 32.5C91 87.5 173.5 145 246.5 204.5C319.5 264.5 383 326 437.5 390Z"
            mask="url(#farTrailMask)"
            fill="url(#grad2)"
          />
          <path
            id="close-trail"
            d="M335.9 234C364.5 184.5 394.5 140 426 100C433 137.5 447.5 166 470 185C492 204 518.5 212.5 550 211.5C527 235 505 261.5 483.5 291C462 320.5 446.5 353.5 437.5 390L257.5 390C281 335.5 307.5 283.5 336 234Z"
            mask="url(#closeTrailAndBallMask)"
            fill="url(#grad1)"
          />
          <animated.path
            id="ball"
            d="M540 200C484.81 200 440 155.17 440 100C440 44.81 484.81 0 540 0C595.19 0 640 44.81 640 100C640 155.17 595.19 200 540 200Z"
            fill="url(#grad3)"
            fillOpacity="0"
            style={ballProps}
          />
        </animated.svg>
      </LogoContainer>
    </Wrapper>
  );
};

export default Logo;
