import { range } from 'lodash';

export enum Player {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

export type GoalType = Player | false;

export interface Position {
  x: number;
  y: number;
}

export interface Dot {
  position: Position;
  border: boolean;
  goal: GoalType;
}

export const DefaultFieldConfig = {
  inner: {
    width: 8,
    height: 10
  },
  goal: {
    width: 2,
    height: 1
  }
};
type Config = typeof DefaultFieldConfig;

export const initializeDots = (config: Config = DefaultFieldConfig): Dot[] => {
  //innerField positions
  const { width, height } = config.inner;
  const widths: number[] = range(-width / 2, width / 2 + 1);
  const heights: number[] = range(-height / 2, height / 2 + 1);
  const innerFieldPositions = widths.flatMap(x => heights.map(y => ({ x, y } as Position)));

  //"goal" positions
  const { width: goalWidth, height: goalHeight } = config.goal;
  const goalWidths: number[] = range(-goalWidth / 2, goalWidth / 2 + 1);
  const goalPositiveHeights: number[] = [...range(height / 2 + 1, height / 2 + 1 + goalHeight)];
  const goalHeights: number[] = goalPositiveHeights.concat(goalPositiveHeights.map((number): number => -number));
  const goalPositions = goalWidths.flatMap(x => goalHeights.map(y => ({ x, y } as Position)));

  const positions: Position[] = [...innerFieldPositions, ...goalPositions];

  const isBorder = ({ x, y }: Position): boolean => {
    // checking if there are positions around our position
    // doing only diagonally (its enough) - position at every diagonal means its not border
    const find = positions.filter(f => [x - 1, x + 1].includes(f.x) && [y - 1, y + 1].includes(f.y));
    console.error({ x, y, l: find.length });
    return find ? find.length !== 4 : false;
  };

  const innerFieldDots: Dot[] = innerFieldPositions.map(
    (position): Dot => ({ position, goal: false, border: isBorder(position) })
  );
  const goalDots = goalPositions.map(
    (position): Dot => ({
      position,
      goal: position.y > 0 ? Player.WHITE : Player.BLACK,
      border: isBorder(position)
    })
  );
  return [...innerFieldDots, ...goalDots];
};
