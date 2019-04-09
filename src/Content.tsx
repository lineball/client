///<reference path="../node_modules/@types/react/index.d.ts"/>
import React, { FunctionComponent, ReactChild, ReactChildren, ReactElement, ReactNode } from 'react';
import Game from './game/Game';
import { useTransition, animated } from 'react-spring';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { Route, Switch, withRouter } from 'react-router-dom';

type Props = {
  location: any;
};

const Content: FunctionComponent<Props> = ({ location }: Props): any => {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0, 100%,0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%,0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translate3d(0, -50%,0)', position: 'absolute' }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/game" component={Game} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={Home} />
      </Switch>
    </animated.div>
  ));
};

export default withRouter(Content);
