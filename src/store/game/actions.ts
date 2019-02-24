import { Field } from '../../game/def';
export const REVERT_MOVE = 'lineball@REVERT_MOVE';
export const ADD_MOVE = 'lineball@ADD_MOVE';

export const addMove = (field: Field) => ({
  type: ADD_MOVE,
  payload: field
});

export const revertMove = () => ({
  type: REVERT_MOVE
});
