import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import {} from './Layout.styled';

const Layout = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <body>
      <div>
        <header>
          <nav></nav>
        </header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </body>
  );
};

export default Layout;
