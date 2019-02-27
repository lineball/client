import React from 'react';
import Dot from './Dot';
import { connect } from 'react-redux';
import { Store } from '../store';
import { Move, Size } from './def';
import { getSVGPosition } from './util';
import { getMoves } from '../store/game/selectors';

interface Props {
  size: Size;
  fields: Array<any>;
  moves: Array<any>;
  borders: Array<any>;
}

const Board = (props: Props) => {
  const {
    fields,
    moves,
    size: { x, y },
    borders
  } = props;
  return (
    <svg
      width={50 * x}
      height={50 * (y + 1)}
      viewBox={`0 0 ${10 * x} ${10 * y}`}
    >
      {borders.map(border => {
        const { x: x1, y: y1 } = getSVGPosition(border[0].position);
        const { x: x2, y: y2 } = getSVGPosition(border[1].position);
        return (
          <line
            key={`
              ${x1}
              ${y1}
              ${x2}
              ${y2}
            `}
            pointerEvents="none"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="blue"
          />
        );
      })}
      {moves.map((move: Move) => {
        const { x: x1, y: y1 } = getSVGPosition(move.path[0].position);
        const { x: x2, y: y2 } = getSVGPosition(move.path[1].position);
        return (
          <line
            key={`
              ${x1}
              ${y1}
              ${x2}
              ${y2}
            `}
            pointerEvents="none"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
          />
        );
      })}
      {fields.map(field => (
        <Dot
          {...field}
          key={`${field.position.x}_${field.position.y}`}
          field={field}
        />
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
