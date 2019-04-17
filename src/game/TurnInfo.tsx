import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import { getCurrentTurn } from '../store/game/selectors';
import { Turn } from './defs';

interface StateProps {
  turn: Turn;
}

const TurnInfo: FunctionComponent<StateProps> = ({ turn: { player, moves } }: StateProps): ReactElement => (
  <>
    <h3>Turn</h3>
    <p>player: {player}</p>
    <p>moves: {JSON.stringify(moves)}</p>
  </>
);

const mapStateToProps = ({ game }: Store): StateProps => ({
  turn: getCurrentTurn(game)
});

export default connect(mapStateToProps)(TurnInfo);
