import React, { FunctionComponent } from 'react';
import Dot from './Dot';
import { connect } from 'react-redux';
import { Store } from '../store';
import { Field, Move, Path, Size } from './def';
import { getKeyFromPath } from './util';
import { getMoves } from '../store/game/selectors';
import Line from './Line';

interface Props {
  size: Size;
  fields: any[];
  moves: any[];
  borders: any[];
}

const Board: FunctionComponent<Props> = (props: Props) => {
  const {
    fields,
    moves,
    size: { x, y },
    borders
  } = props;
  return (
    <svg width={50 * x} height={50 * (y + 1)} viewBox={`0 0 ${10 * x} ${10 * y}`}>
      {borders.map(border => (
        <Line key={getKeyFromPath(border)} path={border} color="blue" />
      ))}
      {moves.map(({ path }) => (
        <Line key={getKeyFromPath(path)} path={path} />
      ))}
      {fields.map(field => (
        <Dot {...field} key={`${field.position.x}_${field.position.y}`} field={field} />
      ))}
    </svg>
  );
};

const mapStateToProps = ({ game }: Store) => {
  const { fields, size, borders } = game;
  return {
    fields,
    moves: getMoves(game),
    size,
    borders
  };
};

export default connect(mapStateToProps)(Board);
