import React from 'react';
import Today from './Today/Today';
import Month from './Month/Month';
import { CalendarWrap } from './Calendar.styled';
// import { Button } from 'CommonStyle/Button/Button.styled';

const Calendar = () => {
  return (
    <CalendarWrap>
      <Today />
      <Month />
    </CalendarWrap>
  );
};

export default Calendar;
