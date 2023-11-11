import Home from 'Pages/Home';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import DailyNorma from './Modals/DailyNorma/DailyNorma.jsx';
// import SignUp from 'Pages/SignUpPage';
const WelcomePage = lazy(() => import('../Pages/WelcomePage'));
const HomePage = lazy(() => import('../Pages/HomePage.jsx'));
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
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/signin',
          element: <SignIn />,
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
    </>
  );

  return (
    <div>
      <Home />
    </div>
  );
};
