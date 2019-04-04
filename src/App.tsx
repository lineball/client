import React, { FunctionComponent, ReactElement, useState } from 'react';
import Game from './game/Game';
import { Provider } from 'react-redux';
import store from './store';
import Loading from './logo/Loading';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100%;
  min-width: 100%;
`;
const App: FunctionComponent = (): ReactElement => {
  const [showGame, setShowGame] = useState(false);

  if (!showGame) {
    return (
      <StyledApp>
        <Loading onAnimationFinish={() => setShowGame(true)} />
      </StyledApp>
    );
  }
  return (
    <StyledApp>
      <Provider store={store}>
        <BrowserRouter>
          {showGame && (
            <Switch>
              <Route path="*/game" component={Game} />
              <Route component={Home} />
            </Switch>
          )}
        </BrowserRouter>
      </Provider>
    </StyledApp>
  );
};

export default App;
