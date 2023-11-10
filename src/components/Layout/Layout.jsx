import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { Logo } from 'components/Logo/Logo';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, Navigation } from './Layout.styled';
import img from '../../img/logo.svg';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';

const Layout = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Header>
        <div className="container">
          <Navigation>
            <Logo>
              <img src={img} />
              <span>
                Tracker <br /> of water
              </span>
            </Logo>
            <RouterLink to="/signin">Sign in</RouterLink>
          </Navigation>
        </div>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
