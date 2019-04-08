import React, { FunctionComponent, ReactElement, useContext, useState } from 'react';
import Game from './game/Game';
import { Provider } from 'react-redux';
import store from './store';
import Loading from './logo/Loading';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Global } from './styles';
import Settings from './pages/Settings';
import Navigation from './navigation/Navigation';
import { animated, useTransition } from 'react-spring';

const App: FunctionComponent = (): ReactElement => {
  const [showGame, setShowGame] = useState(false);

  if (!showGame) {
    return (
      <>
        <Global />
        <Loading onAnimationFinish={() => setShowGame(true)} />
      </>
    );
  }

  return (
    <Provider store={store}>
      <Global />
      <BrowserRouter>
        <Navigation />
        <ContentWithRouter />
      </BrowserRouter>
    </Provider>
  );
};

const Content: any = ({ location }: any) => {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0, 100%,0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%,0)', position: 'absolute' },
    leave: { opacity: 0, transform: 'translate3d(0, -50%,0)', position: 'absolute' }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="*/game" component={Game} />
        <Route path="*/settings" component={Settings} />
        <Route path="/" component={Home} />
      </Switch>
    </animated.div>
  ));
};
const ContentWithRouter = withRouter(Content);
export default App;
