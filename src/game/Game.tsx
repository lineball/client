import React from 'react';
import Board from './Board';
import MoveList from './MoveList';
import TurnInfo from './TurnInfo';

const Game = () => {
  return (
    <>
      <Board />
      <TurnInfo />
      <MoveList />
    </>
  );
};

export default Game;
