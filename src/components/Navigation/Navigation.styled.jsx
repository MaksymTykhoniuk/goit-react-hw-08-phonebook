import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;

  text-decoration: none;
  color: #e0a96d;
  margin-right: 10px;
  &.active {
    text-shadow: 0px 0px 5px #e0a96d;
    scale: 1.1;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
`;
