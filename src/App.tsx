import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Loading from './logo/Loading';
import { BrowserRouter } from 'react-router-dom';
import { Global } from './styles';
import Navigation from './navigation/Navigation';
import Content from './Content';

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
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
        <Navigation />
        <Content />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
