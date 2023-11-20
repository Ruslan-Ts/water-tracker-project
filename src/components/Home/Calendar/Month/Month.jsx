import React, { useState, useEffect } from 'react';

import { RightArrow } from './img/RightArrow';
import { LeftArrow } from './img/LeftArrow';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterMonth } from '../../../../redux/userData/selectors';
import { fetchMonthThunk } from '../../../../redux/userData/thunk';

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
  const dispatch = useDispatch();
  const waterForMonth = useSelector(selectorWaterMonth);
  console.log(waterForMonth);

  useEffect(() => {
    dispatch(fetchMonthThunk());
  }, [dispatch]);

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

    return days.map((day, index) => {
      const waterEntry = waterForMonth[11];
      // console.log('waterEntry', waterEntry);

      const waterPercentage = waterEntry.dailyNormFulfillment;

      return (
        <DayCell key={day}>
          <Day>{day}</Day>
          <DayPercent>{waterPercentage && `${waterPercentage}%`}</DayPercent>
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
