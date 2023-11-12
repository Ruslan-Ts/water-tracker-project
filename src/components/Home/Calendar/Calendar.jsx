import React from 'react';
import Today from './Today/Today';
import DateSelector from './DateSelector/DateSelector';
import { StyledComponent } from './Calendar.styled';

const Calendar = () => {
  return (
    <StyledComponent>
      <Today />
      <DateSelector />
    </StyledComponent>
  );
};

export default Calendar;
