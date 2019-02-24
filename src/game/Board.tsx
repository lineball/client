import React from 'react';
import Node from './Dot';
import { connect } from 'react-redux';
import { Store } from '../store';

export interface BoardSize {
  x: number;
  y: number;
}

interface Props {
  size: BoardSize;
  nodes: Array<any>;
  edges: Array<any>;
}

const Board = (props: Props) => {
  const {
    nodes,
    edges,
    size: { x, y }
  } = props;
  return (
    <svg
      width={50 * x}
      height={50 * (y + 1)}
      viewBox={`0 0 ${10 * x} ${10 * y}`}
    >
      {edges.map(edge => (
        <line
          key={`
            ${edge.position[0].x}
            ${edge.position[0].y}
            ${edge.position[1].x}
            ${edge.position[1].y}
          `}
          pointerEvents="none"
          x1={edge.position[0].x}
          y1={edge.position[0].y}
          x2={edge.position[1].x}
          y2={edge.position[1].y}
          stroke="white"
        />
      ))}
      {nodes.map(node => (
        <Node {...node} key={`${node.position.x}_${node.position.y}`} />
      ))}
    </svg>
  );
};

const mapStateToProps = ({ game: { nodes, edges, size } }: Store) => ({
  nodes,
  edges,
  size
});

export default connect(mapStateToProps)(Board);
