import React from 'react';
import Today from './Today/Today';
import DateSelector from './DateSelector/DateSelector';
import { CalendarWrap } from './Calendar.styled';

const Calendar = () => {
  return (
    <div>
      <CalendarWrap>
        <Today />
        <DateSelector />
      </CalendarWrap>
    </div>
  );
};

export default Calendar;
