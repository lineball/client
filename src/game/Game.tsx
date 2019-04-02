import React, { FunctionComponent, ReactElement } from 'react';
import Board from './Board';
import MoveList from './MoveList';
import TurnInfo from './TurnInfo';
import { Link } from 'react-router-dom';
import { AppContainer } from '../styles';

const Game: FunctionComponent<{}> = (): ReactElement => {
  return (
    <AppContainer>
      <Link to="/">Home</Link>
      <br />
      <Board />
      <TurnInfo />
      <MoveList />
    </AppContainer>
  );
};

export default Game;
