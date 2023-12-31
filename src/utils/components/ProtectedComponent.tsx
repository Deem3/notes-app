import { Header } from 'components';
import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedComponent = () => {
  const token = Cookies.get('token');

  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={'/auth/login'} />
  );
};
