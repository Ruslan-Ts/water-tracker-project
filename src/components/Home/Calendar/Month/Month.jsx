import React, { useState } from 'react';
import { RightArrow } from './img/RightArrow';
import { LeftArrow } from './img/LeftArrow';

import {
  ArrowButton,
  CalendarContainer,
  DayCell,
  DaysContainer,
  MonthNavigation,
  MonthControl,
  Month,
  DayPercent,
  Day,
} from './Month.styled';

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

  // Mock backend data
  const backendData = [
    { day: 1, percentage: 25 },
    { day: 2, percentage: 50 },
    { day: 3, percentage: 25 },
    { day: 4, percentage: 50 },
    { day: 5, percentage: 25 },
    { day: 6, percentage: 50 },
    { day: 7, percentage: 25 },
    { day: 8, percentage: 50 },
    { day: 9, percentage: 25 },
    { day: 10, percentage: 50 },
    { day: 11, percentage: 25 },
    { day: 12, percentage: 50 },
    { day: 13, percentage: 25 },
    { day: 14, percentage: 50 },
    { day: 15, percentage: 25 },
    { day: 16, percentage: 50 },
    { day: 17, percentage: 25 },
    { day: 18, percentage: 50 },
    { day: 19, percentage: 25 },
    { day: 20, percentage: 50 },
    { day: 21, percentage: 25 },
    { day: 22, percentage: 50 },
    { day: 23, percentage: 25 },
    { day: 24, percentage: 50 },
    { day: 25, percentage: 25 },
    { day: 26, percentage: 50 },
    { day: 27, percentage: 25 },
    { day: 28, percentage: 50 },
    { day: 29, percentage: 25 },
    { day: 30, percentage: 50 },
    // ... more data
  ];

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return days.map((day, index) => {
      const dataForDay = backendData.find(data => data.day === day);

      return (
        <DayCell key={day}>
          <Day>{day}</Day>
          <DayPercent>{dataForDay && `${dataForDay.percentage}%`}</DayPercent>
        </DayCell>
      );
    });
  };

  return (
    <CalendarContainer>
      <MonthNavigation>
        <h2>Month</h2>
        <MonthControl>
          <ArrowButton onClick={handlePrevMonth}>
            <LeftArrow />
          </ArrowButton>
          <Month>
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}
          </Month>
          <ArrowButton onClick={handleNextMonth}>
            <RightArrow />
          </ArrowButton>
        </MonthControl>
      </MonthNavigation>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
