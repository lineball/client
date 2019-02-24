import React, { useState } from 'react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addEdge } from '../store/game/actions';
import { Edge } from '../store/game/reducers';

export interface Position {
  x: number;
  y: number;
}

interface Props {
  position: Position;
  current: Position;
  addEdge: Function;
}

const Dot = (props: Props) => {
  const [hover, setHover] = useState(false);
  const {
    position: { x, y },
    current,
    addEdge
  } = props;
  const isCurrent = current.x === x && current.y === y;

  return (
    <>
      <circle
        onClick={() =>
          addEdge(new Edge([{ x: current.x, y: current.y }, { x, y }]))
        }
        r="4"
        fill="transparent"
        cx={x}
        cy={y}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <circle
        pointerEvents="none"
        cx={x}
        cy={y}
        r={hover || isCurrent ? '2' : '0.5'}
        fill={isCurrent ? 'red' : 'white'}
      />
      {hover && (
        <line
          pointerEvents="none"
          x1={current.x}
          y1={current.y}
          x2={x}
          y2={y}
          stroke="pink"
        />
      )}
    </>
  );
};

const mapStateToProps = ({ game: { position } }: Store) => ({
  current: position
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addEdge: (edge: Edge) => dispatch(addEdge(edge))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dot);
