import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';

import {
  UserMenuButton,
  UserMenuText,
  UserMenuUser,
  UserMenuWrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuText>
        Welcome, <UserMenuUser>{user.email}</UserMenuUser>
      </UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuWrapper>
  );
};
