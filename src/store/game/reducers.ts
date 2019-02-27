import { ADD_MOVE, REVERT_MOVE, REVERT_TURN } from './actions';
import { Action } from '../index';
import { Field, Move, Path, Size, Turn } from '../../game/def';
import { initialState } from './init';
import { getCurrentField } from './selectors';
import { getKeyFromPath } from '../../game/util';

export interface GameState {
  fields: Field[];
  size: Size;
  paths: Path[];
  borders: Path[];
  turns: Turn[];
}

export default (state: GameState = initialState, action: Action): GameState => {
  // noinspection FallThroughInSwitchStatementJS
  switch (action.type) {
    case ADD_MOVE: {
      const { payload: field } = action;
      const currentField = getCurrentField(state);
      const path = state.paths.find(
        f => f.includes(field) && f.includes(currentField)
      );

      if (!path) {
        throw new Error('Path not found!');
      }
      console.log(getKeyFromPath(path));
      const direction = path[0] === field ? 0 : 1;

      //same turn

      return {
        ...state,
        turns: [
          ...state.turns.slice(0, -1),
          {
            ...state.turns[state.turns.length - 1],
            moves: [
              ...state.turns[state.turns.length - 1].moves,
              { path, direction } as Move
            ]
          }
        ]
      };
    }
    case REVERT_MOVE: {
      const lastTurn = state.turns[state.turns.length - 1];
      if (lastTurn.moves.length) {
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
      //fallback
    }
    case REVERT_TURN: {
      if (state.turns.length > 1) {
        return {
          ...state,
          turns: [...state.turns.slice(0, -1)]
        };
      }
      //fallback
    }
    default: {
      return state;
    }
  }
};
