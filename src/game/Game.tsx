import React, { FunctionComponent, ReactElement } from 'react';
import Board from './Board';
import MoveList from './MoveList';
import TurnInfo from './TurnInfo';
import { FullPage } from '../styles';

const Game: FunctionComponent<{}> = (): ReactElement => {
  return (
    <FullPage>
      <div style={{ maxWidth: 960, marginLeft: '1%',marginTop:'15%', overflowY: 'scroll' }}>
        <Board />
        <TurnInfo />
        <MoveList />
      </div>
    </FullPage>
  );
};

export default Game;
