import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store';
import { getCurrentTurn } from '../store/game/selectors';
import { Turn } from './def';

interface Props {
  turn: Turn;
}

const TurnInfo = ({ turn: { player, moves } }: Props) => (
  <>
    <h3>Turn</h3>
    <p>player: {player}</p>
    <p>moves: {JSON.stringify(moves)}</p>
  </>
);

const mapStateToProps = ({ game }: Store) => ({
  turn: getCurrentTurn(game)
});

export default connect(mapStateToProps)(TurnInfo);
