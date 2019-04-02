import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles';
type Props = {
  path: string;
  label: string;
};

const StyledMenuItem = styled.div`
  padding: 10px;
  background: white;
  color: ${colors.background};
  margin-top: 5px;
  font-size: 3rem;
  &:hover {
    transform: scale(1.5);
  }
`;

const MenuItem = ({ path, label }: Props) => {
  return (
    <StyledMenuItem>
      <Link to={path}>{label}</Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
