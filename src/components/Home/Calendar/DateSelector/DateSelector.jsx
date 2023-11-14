import React, { useState } from 'react';

import {
  ArrowButton,
  CalendarContainer,
  DayCell,
  DaysContainer,
  MonthNavigation,
} from './DateSelector.styled';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return days.map(day => (
      <>
        <DayCell key={day}>{day}</DayCell>
      </>
    ));
  };

  return (
    <CalendarContainer>
      <MonthNavigation>
        <h2>Month</h2>
        <ArrowButton onClick={handlePrevMonth}>{'<'}</ArrowButton>
        <span>
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
            currentDate
          )}
        </span>
        <ArrowButton onClick={handleNextMonth}>{'>'}</ArrowButton>
      </MonthNavigation>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
