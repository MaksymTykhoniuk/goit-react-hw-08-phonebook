import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { LayoutWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};
