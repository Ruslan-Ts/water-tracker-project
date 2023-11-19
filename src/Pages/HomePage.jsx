import { MyDailyNorma } from 'components/Home/MyDailyNorma/MyDailyNorma';
import Calendar from '../components/Home/Calendar/Calendar';

import React from 'react';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';

import { WrapperHomePage } from './HomePage.styled';
import { selectorIsLoading } from 'redux/root/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectorIsLoading);
  console.log(isLoading);

  return (
    <div className="container">
      <WrapperHomePage>
        {isLoading && <Loader />}
        <MyDailyNorma />
        <Calendar />
      </WrapperHomePage>
    </div>
  );
};

export default HomePage;
