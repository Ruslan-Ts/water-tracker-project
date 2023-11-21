import React, { useState, useEffect } from 'react';

import Icons from '../../../../img/sprite.svg';

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

  useEffect(() => {
    dispatch(fetchMonthThunk(currentDate.getMonth()));
  }, [dispatch, currentDate]);

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

    return days.map(day => {
      const waterPercentage = waterForMonth?.find(item => {
        return Number(item.data.split(',')[0]) === day;
      });

      return (
        <DayCell key={day}>
          <Day
            $isOutlineVisible={
              waterPercentage && waterPercentage.dailyNormFulfillment >= 100
            }
          >
            {day}
          </Day>
          <DayPercent>
            {waterPercentage ? `${waterPercentage.dailyNormFulfillment}%` : '-'}
          </DayPercent>
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
            <svg width="14" height="14">
              <use href={Icons + '#arrow-left'}></use>
            </svg>
          </ArrowButton>
          <Month>
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}
          </Month>
          <ArrowButton onClick={handleNextMonth}>
            <svg width="14" height="14">
              <use href={Icons + '#arrow-right'}></use>
            </svg>
          </ArrowButton>
        </MonthControl>
      </MonthNavigation>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
