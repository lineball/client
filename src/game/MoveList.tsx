import React, { FunctionComponent, ReactElement } from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Move, Turn } from './def';
import { getKeyFromPath } from './util';
import { Dispatch } from 'redux';
import { revertMove as revertMoveAction, revertTurn as revertTurnAction } from '../store/game/actions';
import { getCurrentTurn, getMoves } from '../store/game/selectors';

interface StateProps {
  moves: Move[];
  turn: Turn;
}

interface DispatchProps {
  revertMove: () => void;
  revertTurn: () => void;
}

type Props = StateProps & DispatchProps;

const MoveList: FunctionComponent<Props> = ({ moves, revertMove, revertTurn, turn }: Props): ReactElement => (
  <>
    <h3>Moves</h3>
    {turn.moves.length ? (
      <button
        type="button"
        onClick={() => {
          revertMove();
        }}
      >
        revert move
      </button>
    ) : (
      moves.length && (
        <button
          type="button"
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

const mapStateToProps = ({ game }: Store): StateProps => ({
  moves: getMoves(game),
  turn: getCurrentTurn(game)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  revertMove: () => dispatch(revertMoveAction()),
  revertTurn: () => dispatch(revertTurnAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveList);
