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
  margin-bottom: 5px;
  font-size: 3rem;
  transition: 100ms;
  &:hover {
    margin-left: -20px;
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
