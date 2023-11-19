import { MyDailyNorma } from 'components/Home/MyDailyNorma/MyDailyNorma';
import Calendar from '../components/Home/Calendar/Calendar';

import React from 'react';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from 'redux/auth/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectorIsLoading);
  console.log(isLoading);

  return (
    <div className="container">
      {isLoading && <Loader />}
      <MyDailyNorma />
      <Calendar />
    </div>
  );
};

export default HomePage;
