import { ADD_MOVE, AddMoveAction, REVERT_MOVE, REVERT_TURN } from './actions';
import { Action } from '../index';
import { Field, Move, Path, Player, Size, Turn } from '../../game/defs';
import { initialState } from './init';
import { getCurrentField, getCurrentTurn } from './selectors';

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
      const { payload: field } = action as AddMoveAction;
      const currentField = getCurrentField(state);
      const path = state.paths.find((f): boolean => f.includes(field) && f.includes(currentField));
      if (!path) {
        throw new Error('Path not found!');
      }
      const direction = path[0] === field ? 0 : 1;
      const thisTurn: Turn = {
        ...state.turns[state.turns.length - 1],
        moves: [...state.turns[state.turns.length - 1].moves, { path, direction }]
      };
      // is same turn
      const isSameTurn = !!state.turns
        .flatMap((turn): Move[] => turn.moves)
        .map((move): Path => move.path)
        .concat(state.borders)
        .filter((p: Path): boolean => p.includes(field)).length;
      if (isSameTurn) {
        return {
          ...state,
          turns: [...state.turns.slice(0, -1), thisTurn]
        };
      }
      const nextTurn: Turn = {
        moves: [],
        player: getCurrentTurn(state).player === Player.WHITE ? Player.BLACK : Player.WHITE
      };
      return {
        ...state,
        turns: [...state.turns.slice(0, -1), thisTurn, nextTurn]
      };
    }
    case REVERT_MOVE: {
      const lastTurn = state.turns[state.turns.length - 1];
      if (lastTurn.moves.length > 0) {
        return {
          ...state,
          turns: [
            ...state.turns.slice(0, -1),
            {
              ...lastTurn,
              moves: [...lastTurn.moves.slice(0, -1)]
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
        const prevTurn = state.turns[state.turns.length - 2];
        return {
          ...state,
          turns: [
            ...state.turns.slice(0, -2),
            {
              ...prevTurn,
              moves: []
            }
          ]
        };
      }
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
    default: {
      return state;
    }
  }
};
