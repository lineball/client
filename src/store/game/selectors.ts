import { GameState } from './reducers';
import { Dot, Move, Path, Turn } from '../../game/defs';
import { createSelector } from 'reselect';
import { difference } from 'lodash';

export const getMoves = (state: GameState): Move[] => state.turns.flatMap((turn): Move[] => turn.moves);
const getFields = (state: GameState): Dot[] => state.dots;
const getPaths = (state: GameState): Path[] => state.paths;
const getTurns = (state: GameState): Turn[] => state.turns;

const getCenterField = (fields: Dot[]): Dot | undefined =>
  fields.find((f): boolean => f.position.x === 4 && f.position.y === 6);

export const getCurrentField = createSelector(
  [getMoves, getFields],
  (moves, fields): Dot => {
    if (moves.length === 0) {
      const find = getCenterField(fields);
      if (!find) {
        throw new Error('Problem with getting last field');
      }
      return find;
    }
    if (moves.length === 1) {
      const find = getCenterField(fields);
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
  (turns): Turn => {
    if (!turns.length) {
      throw new Error('Error getting current turn');
    }
    return turns[turns.length - 1];
  }
);

export const getAllPathsWithCurrentField = createSelector(
  [getCurrentField, getPaths],
  (currentField, paths): Path[] => paths.filter((f): boolean => f.includes(currentField))
);

export const getUsedPathsWithCurrentField = createSelector(
  [getMoves, getCurrentField],
  (moves, currentField): Path[] =>
    moves.filter(({ path }): boolean => path.includes(currentField)).map(({ path }): Path => path)
);

export const getPossibleMoveFields = createSelector(
  [getCurrentField, getAllPathsWithCurrentField, getUsedPathsWithCurrentField],
  (currentField, allPathsWithCurrentField, usedPathsWithCurrentField): Dot[] => {
    return difference(allPathsWithCurrentField, usedPathsWithCurrentField).map(
      ([a, b]): Dot => (a === currentField ? b : a)
    );
  }
);
