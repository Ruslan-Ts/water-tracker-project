import { MyDailyNorma } from 'components/Home/MyDailyNorma/MyDailyNorma';
import Calendar from '../../components/Home/Calendar/Calendar';

import React from 'react';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';

import { WrapperHomePage } from './HomePage.styled';
import { selectIsLoading } from 'redux/root/selectors';
import { LayoutStyled } from 'components/Layout/Layout.styled';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    // <LayoutStyled>
    <div className="container">
      <WrapperHomePage>
        {isLoading && <Loader />}
        <MyDailyNorma />
        <Calendar />
      </WrapperHomePage>
    </div>
    // </LayoutStyled>
  );
};

export default HomePage;
