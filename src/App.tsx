import React, { FunctionComponent, ReactElement, useState } from 'react';
import Game from './game/Game';
import { AppContainer } from './styles';
import { Provider } from 'react-redux';
import store from './store';
import Intro from './intro/Intro';

const App: FunctionComponent = (): ReactElement => {
  const [showGame, setShowGame] = useState(false);
  return (
    <Provider store={store}>
      <AppContainer>
        <Intro onAnimationFinish={() => setShowGame(true)} />
        {showGame && <Game />}
      </AppContainer>
    </Provider>
  );
};

export default App;
