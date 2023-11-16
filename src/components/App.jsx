import { lazy } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import DailyNorma from './Modals/DailyNorma/DailyNorma.jsx';
import Setting from './Modals/Setting/Setting.jsx';
// import SignUp from 'Pages/SignUpPage';
import ForgotPasswordPage from 'Pages/ForgotPasswordPage.jsx';
import HomePage from '../Pages/HomePage.jsx';
const WelcomePage = lazy(() => import('../Pages/WelcomePage/WelcomePage.jsx'));
// const HomePage = lazy(() => import('../Pages/HomePage.jsx'));
const SignIn = lazy(() => import('../Pages/SignInPage.jsx'));
const SignUp = lazy(() => import('../Pages/SignUpPage.jsx'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage.jsx'));

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <WelcomePage />,
          errorElement: <NotFoundPage />,
        },
        {
          path: '/signup',
          element: <SignUp />,
          errorElement: <NotFoundPage />,
        },
        {
          path: '/signin',
          element: <SignIn />,
          errorElement: <NotFoundPage />,
        },
        {
          path: '/forgot-password',
          element: <ForgotPasswordPage />,
          errorElement: <NotFoundPage />,
        },
        {
          path: '/home',
          element: <HomePage />,
        },
      ],
    },
  ],
  { basename: '/water-tracker-project' }
);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
      <DailyNorma />
      <Setting />
    </>
  );
};
