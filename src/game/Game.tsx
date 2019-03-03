import React, { FunctionComponent, ReactElement } from 'react';
import Board from './Board';
import MoveList from './MoveList';
import TurnInfo from './TurnInfo';

const Game: FunctionComponent<{}> = (): ReactElement => {
  return (
    <>
      <Board />
      <TurnInfo />
      <MoveList />
    </>
  );
};

export default Game;
