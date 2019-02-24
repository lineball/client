import { Path, Position } from './def';

export const getSVGPosition = ({ x, y }: Position) => ({
  x: x * 10 + 5,
  y: y * 10
});

export const getKeyFromPosition = ({ x, y }: Position) => `${x}_${y}`;
export const getKeyFromPath = ([a, b]: Path) =>
  `${getKeyFromPosition(a.position)}:${getKeyFromPosition(b.position)}`;
