import React, { FunctionComponent, ReactElement, useState } from 'react';
import Game from './game/Game';
import { AppContainer } from './styles';
import { Provider } from 'react-redux';
import store from './store';
import Intro from './intro/Intro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './menu/Menu';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100%;
  min-width: 100%;
`;
const App: FunctionComponent = (): ReactElement => {
  const [showGame, setShowGame] = useState(false);
  return (
    <StyledApp>
      <Provider store={store}>
        <BrowserRouter>
          <Intro onAnimationFinish={() => setShowGame(true)} />
          {showGame && (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/game" component={Game} />
            </Switch>
          )}
        </BrowserRouter>
      </Provider>
    </StyledApp>
  );
};

export default App;
