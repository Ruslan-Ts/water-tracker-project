import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import HeaderComponent from '../Header';

const Layout = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <HeaderComponent />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
