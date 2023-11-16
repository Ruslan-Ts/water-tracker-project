import React from 'react';
import Today from './Today/Today';
import DateSelector from './DateSelector/DateSelector';
import { CalendarWrap } from './Calendar.styled';
import { Button } from 'CommonStyle/Button/Button.styled';

const Calendar = () => {
  return (
    <CalendarWrap>
      <Today />
      <DateSelector />
    </CalendarWrap>
  );
};

export default Calendar;
