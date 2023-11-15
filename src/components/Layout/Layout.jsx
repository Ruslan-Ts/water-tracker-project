import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import HeaderComponent from '../Header';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(selectUserToken);

  return (
    <div>
      <HeaderComponent isAuthenticated={isLoggedIn} />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
