import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #f6ead4;
  opacity: 0.4;
  text-decoration: none;
  margin-right: 10px;
  &.active {
    opacity: 1;
    color: #e0a96d;
  }
`;
