import React, { FunctionComponent, ReactElement } from 'react';
import Game from './game/Game';
import { AppContainer } from './styles';
import { Provider } from 'react-redux';
import store from './store';

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <AppContainer>
      <Game />
    </AppContainer>
  </Provider>
);

export default App;
