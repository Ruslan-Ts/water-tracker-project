import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import DailyNorma from './Modals/DailyNorma/DailyNorma.jsx';
import Setting from './Modals/Setting/Setting.jsx';
import PublicRoute from 'guards/PublicRoute.jsx';
import PrivateRoute from 'guards/PrivateRoute.jsx';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors.js';

const WelcomePage = lazy(() => import('../Pages/WelcomePage/WelcomePage.jsx'));
const HomePage = lazy(() => import('../Pages/HomePage.jsx'));
const SignIn = lazy(() => import('../Pages/SignInPage.jsx'));
const SignUp = lazy(() => import('../Pages/SignUpPage.jsx'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage.jsx'));
const ForgotPasswordPage = lazy(() =>
  import('../Pages/ForgotPasswordPage.jsx')
);

const createRouter = isAuth => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: !isAuth ? <WelcomePage /> : <HomePage />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/signup',
            element: (
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '/signin',
            element: (
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
          {
            path: '/forgot-password',
            element: (
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            ),
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
    { basename: '/water-tracker-project' }
  );
  return router;
};

export const App = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <RouterProvider router={createRouter(isAuth)} />;
      <DailyNorma />
      <Setting />
    </>
  );
};
