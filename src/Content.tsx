///<reference path="../node_modules/@types/react/index.d.ts"/>
import React, { FunctionComponent, ReactChild, ReactChildren, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import Game from './game/Game';
import { useTransition, animated } from 'react-spring';
import Home from './pages/Home';
import { device } from './device';
import Settings from './pages/Settings';
import { Route, Switch, withRouter } from 'react-router-dom';


const ContentStyle = styled.div`
  @media ${device.tablet} {
    width:50%
    right:15vh;
   }
  @media ${device.mobileS} {
    width:50%
    right:5vh;
   }
   @media ${device.mobileM} {
    width:50%
    right:9vh;
   }
   @media ${device.mobileL} {
    width:50%
    right:13vh;
   }
`;

const Content: FunctionComponent<any> = ({ location }): any => {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0, 100%,0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%,0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translate3d(0, -50%,0)', position: 'absolute' }
  });
  return transitions.map(({ item, props, key }) => (
    <ContentStyle>
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/game" component={Game} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={Home} />
      </Switch>
    </animated.div>
    </ContentStyle>
  ));
};

export default withRouter(Content);
