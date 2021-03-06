import { GameState } from './reducers';
import { flatMap, partition, range } from 'lodash';
import { Field, Path, Player, Position, Turn } from '../../game/def';
import { getKeyFromPath } from '../../game/util';

const initField = ({ x, y }: Position): Field => ({
  name: `${String.fromCharCode(65 + y)}${x}`,
  position: { x, y }
});

const initFields = (): Field[] =>
  flatMap([
    ...[0, 12].map((y): Field[] => range(3, 6).map((x): Field => initField({ x, y }))),
    ...range(1, 12).map((y): Field[] => range(0, 9).map((x): Field => initField({ x, y })))
  ]);

const isBorder = ([a, b]: [Position, Position]): boolean => {
  // horizontal
  if (a.y === b.y) {
    if ([0, 12].includes(a.y)) {
      return true;
    }
    if ([1, 11].includes(a.y) && (a.x < 3 || a.x >= 5)) {
      return true;
    }
  }
  // vertical
  else if (a.x === b.x) {
    if ([0, 8].includes(a.x)) {
      return true;
    }
    if ([3, 5].includes(a.x) && [0, 11].includes(a.y)) {
      return true;
    }
  }
  return false;
};

const isBehindGatePath = (path: Path): boolean => {
  const pathString = getKeyFromPath(path);
  return ['5_0:6_1', '3_0:2_1', '6_11:5_12', '2_11:3_12'].includes(pathString);
};

const initBordersAndPaths = (fields: Field[]): [Path[], Path[]] =>
  partition(
    flatMap(
      fields.map(
        (field): Path[] => {
          const { x, y } = field.position;
          const nearestFieldsWithGreaterPosition = fields.filter(
            (maybeNearest): boolean =>
              (([x, x + 1].includes(maybeNearest.position.x) && [y, y + 1].includes(maybeNearest.position.y)) ||
                (maybeNearest.position.x === x - 1 && maybeNearest.position.y === y + 1)) &&
              maybeNearest.name !== field.name &&
              !isBehindGatePath([field, maybeNearest])
          );
          return nearestFieldsWithGreaterPosition.map((nearestField): Path => [field, nearestField]);
        }
      )
    ),
    ([a, b]): boolean => isBorder([a.position, b.position])
  );

const initTurns = (): Turn[] => [
  {
    player: Player.WHITE,
    moves: []
  }
];

const initState = (): GameState => {
  const fields = initFields();
  const [borders, paths] = initBordersAndPaths(fields);
  return {
    fields,
    paths,
    borders,
    turns: initTurns(),
    size: {
      x: 9,
      y: 12
    }
  };
};
export const initialState: GameState = initState();

export const testOnly = {
  initState,
  initFields,
  initBordersAndPaths
};
