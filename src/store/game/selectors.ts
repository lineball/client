import { GameState } from './reducers';
import { Field, Path } from '../../game/def';
import { createSelector } from 'reselect';
import { difference } from 'lodash';

export const getMoves = (state: GameState) => state.turns.flatMap(turn => turn.moves);
const getFields = (state: GameState) => state.fields;
const getPaths = (state: GameState) => state.paths;
const getTurns = (state: GameState) => state.turns;

export const getCurrentField = createSelector(
  [getMoves, getFields],
  (moves, fields): Field => {
    if (moves.length === 0) {
      const find = fields.find(f => f.position.x === 4 && f.position.y === 6);
      if (!find) {
        throw new Error('Problem with getting last field');
      }
      return find;
    }
    if (moves.length === 1) {
      const find = fields.find(f => f.position.x === 4 && f.position.y === 6);
      if (!find) {
        throw new Error('Problem with getting last field');
      }
      return moves[0].path[0] === find ? moves[0].path[1] : moves[0].path[0];
    }

    const lastMove = moves[moves.length - 1];
    return lastMove.path[lastMove.direction];
  }
);

export const getCurrentTurn = createSelector(
  [getTurns],
  turns => {
    if (!turns.length) {
      throw new Error('Error getting current turn');
    }
    return turns[turns.length - 1];
  }
);

export const getAllPathsWithCurrentField = createSelector(
  [getCurrentField, getPaths],
  (currentField, paths) => paths.filter(f => f.includes(currentField))
);

export const getUsedPathsWithCurrentField = createSelector(
  [getMoves, getCurrentField],
  (moves, currentField) => moves.filter(({ path }) => path.includes(currentField)).map(({ path }) => path)
);

export const getPossibleMoveFields = createSelector(
  [getCurrentField, getAllPathsWithCurrentField, getUsedPathsWithCurrentField],
  (currentField, allPathsWithCurrentField, usedPathsWithCurrentField) => {
    return difference(allPathsWithCurrentField, usedPathsWithCurrentField).map(([a, b]) =>
      a === currentField ? b : a
    );
  }
);
