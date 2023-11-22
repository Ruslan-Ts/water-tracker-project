import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserToken } from '../../redux/auth/selectors';

// import { LayoutStyled } from './Layout.styled';
import Loader from 'components/Loader';
import HeaderComponent from '../Header';

const Layout = () => {
  const isLoggedIn = useSelector(selectUserToken);

  return (
    <>
      {' '}
      {/* <LayoutStyled> */}
      <HeaderComponent isAuthenticated={isLoggedIn} />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* </LayoutStyled> */}
    </>
  );
};

export default Layout;
