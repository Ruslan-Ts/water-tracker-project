import { Button } from 'CommonStyle/Buttons/Button.styled';
import DateSelector from 'components/Home/DateSelector/DateSelector';
import Today from 'components/Home/Today/Today';
import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpenModalWaterRateAction } from 'redux/modals/slice';

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(isOpenModalWaterRateAction(true));
        }}
      >
        Edit
      </Button>
      <Today />
      <DateSelector />
    </div>
  );
};

export default HomePage;
