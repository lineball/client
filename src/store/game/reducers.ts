import { ADD_MOVE, REVERT_MOVE } from './actions';
import { Action } from '../index';
import {
  Field,
  Move,
  Path,
  Player,
  Position,
  Size,
  Turn
} from '../../game/def';
import { initialState } from './init';
import { getCurrentField } from './selectors';
import { getKeyFromPath } from '../../game/util';

export interface GameState {
  fields: Field[];
  size: Size;
  paths: Path[];
  borders: Path[];
  moves: Move[];
  turns: Turn[];
}

export default (state: GameState = initialState, action: Action): GameState => {
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
      return {
        ...state,
        moves: [...state.moves, { path, direction }]
      };
    }
    case REVERT_MOVE: {
      return {
        ...state,
        moves: state.moves.slice(0, -1)
      };
    }
    default: {
      return state;
    }
  }
};
