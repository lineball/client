import React from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Move, Turn } from './def';
import { getKeyFromPath } from './util';
import { Dispatch } from 'redux';
import { revertMove, revertTurn } from '../store/game/actions';
import { getCurrentTurn, getMoves } from '../store/game/selectors';

interface Props {
  moves: Array<Move>;
  revertMove: () => void;
  revertTurn: () => void;
  turn: Turn;
}

const MoveList = ({ moves, revertMove, revertTurn, turn }: Props) => (
  <>
    <h3>Moves</h3>
    {turn.moves.length ? (
      <button
        onClick={() => {
          revertMove();
        }}
      >
        revert move
      </button>
    ) : (
      moves.length && (
        <button
          onClick={() => {
            revertTurn();
          }}
        >
          revert turn
        </button>
      )
    )}
    <ul>
      {moves.map(move => (
        <li key={getKeyFromPath(move.path)}>{JSON.stringify(move)}</li>
      ))}
    </ul>
  </>
);

const mapStateToProps = ({ game }: Store) => ({
  moves: getMoves(game),
  turn: getCurrentTurn(game)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  revertMove: () => dispatch(revertMove()),
  revertTurn: () => dispatch(revertTurn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveList);
