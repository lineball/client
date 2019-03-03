import { ADD_MOVE, REVERT_MOVE, REVERT_TURN } from './actions';
import { Action } from '../index';
import { Field, Move, Path, Player, Size, Turn } from '../../game/def';
import { initialState } from './init';
import { getCurrentField, getCurrentTurn, getUsedPathsWithCurrentField } from './selectors';

export interface GameState {
  fields: Field[];
  size: Size;
  paths: Path[];
  borders: Path[];
  turns: Turn[];
}

export default (state: GameState = initialState, action: Action): GameState => {
  switch (action.type) {
    case ADD_MOVE: {
      const { payload: field } = action;
      const currentField = getCurrentField(state);
      const path = state.paths.find(f => f.includes(field) && f.includes(currentField));
      if (!path) {
        throw new Error('Path not found!');
      }
      const direction = path[0] === field ? 0 : 1;
      const thisTurn: Turn = {
        ...state.turns[state.turns.length - 1],
        moves: [...state.turns[state.turns.length - 1].moves, { path, direction } as Move]
      };
      //is same turn
      const isSameTurn = !!state.turns
        .flatMap(turn => turn.moves)
        .map(move => move.path)
        .concat(state.borders)
        .filter(path => path.includes(field))
        .map(path => path).length;

      console.log({ isSameTurn });

      if (isSameTurn) {
        return {
          ...state,
          turns: [...state.turns.slice(0, -1), thisTurn]
        };
      } else {
        const nextTurn: Turn = {
          moves: [],
          player: getCurrentTurn(state).player === Player.WHITE ? Player.BLACK : Player.WHITE
        };
        return {
          ...state,
          turns: [...state.turns.slice(0, -1), thisTurn, nextTurn]
        };
      }
    }
    case REVERT_MOVE: {
      const lastTurn = state.turns[state.turns.length - 1];
      if (lastTurn.moves.length > 0) {
        console.log('reverting move');
        /* same turn - revert last move */
        return {
          ...state,
          turns: [
            ...state.turns.slice(0, -1),
            {
              ...lastTurn,
              moves: [...state.turns[state.turns.length - 1].moves.slice(0, -1)]
            }
          ]
        };
      }
      return {
        ...state
      };
    }
    case REVERT_TURN: {
      if (state.turns.length > 2) {
        const currentTurn = state.turns[state.turns.length - 1];
        if (currentTurn.moves.length > 0) {
          return {
            ...state
          };
        }
        return {
          ...state,
          turns: [...state.turns.slice(0, -2)]
        };
      } else {
        return {
          ...state,
          turns: [
            {
              player: Player.WHITE,
              moves: []
            }
          ]
        };
      }
    }
    default: {
      return state;
    }
  }
};
