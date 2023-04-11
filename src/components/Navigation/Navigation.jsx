import { useAuth } from 'hooks';
import { NavigationWrapper, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationWrapper>
  );
};
