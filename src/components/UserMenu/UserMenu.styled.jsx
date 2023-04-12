import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const UserMenuText = styled.p`
  font-size: 20px;
  color: #f6ead4;
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  padding: 6px 8px;
  transition: all 250ms ease;
  border: 1px solid #e0a96d;
  color: #f6ead4;
  background-color: transparent;
  border-radius: 6px;
  &:hover {
    opacity: 0.85;
    background-color: #e0a96d;
    scale: 1.1;
  }
`;

export const UserMenuUser = styled.span`
  font-size: 20px;
  color: #e0a96d;
`;
