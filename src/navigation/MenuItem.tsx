import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledMenuItem = styled.div`
  padding: 10px;
  background: white;
  color: ${colors.background};
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 3rem;
  transition: 100ms;
  :hover {
    color: red;
  }
`;
type Props = {
  path: string;
  label: string;
  onClick: () => void;
};

const MenuItem = ({ path, label, onClick }: Props): ReactElement => {
  return (
    <StyledMenuItem>
      <Link to={path} onClick={onClick}>
        {label}
      </Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
