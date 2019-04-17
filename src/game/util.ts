import { Path, Position } from './defs';

export const getSVGPosition = ({ x, y }: Position): Position => ({
  x: x * 10 + 5,
  y: y * 10
});

export const getKeyFromPosition = ({ x, y }: Position): string => `${x}_${y}`;
export const getKeyFromPath = ([a, b]: Path): string =>
  `${getKeyFromPosition(a.position)}:${getKeyFromPosition(b.position)}`;
