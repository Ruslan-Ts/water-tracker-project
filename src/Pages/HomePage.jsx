import Calendar from '../components/Home/Calendar/Calendar';
import { Button } from 'CommonStyle/Buttons/Button.styled';

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
<Calendar />
    </div>
  );
};

export default HomePage;
