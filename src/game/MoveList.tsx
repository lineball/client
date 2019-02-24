import React from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Move } from './def';
import { getKeyFromPath } from './util';
import { Dispatch } from 'redux';
import { revertMove } from '../store/game/actions';

interface Props {
  moves: Array<Move>;
  revertMove: () => void;
}

const MoveList = ({ moves, revertMove }: Props) => (
  <>
    <h3>Moves</h3>
    <button
      onClick={() => {
        revertMove();
      }}
    >
      revert
    </button>
    <ul>
      {moves.map(move => (
        <li key={getKeyFromPath(move.path)}>{JSON.stringify(move)}</li>
      ))}
    </ul>
  </>
);

const mapStateToProps = (state: Store) => ({
  moves: state.game.moves
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  revertMove: () => dispatch(revertMove())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveList);
