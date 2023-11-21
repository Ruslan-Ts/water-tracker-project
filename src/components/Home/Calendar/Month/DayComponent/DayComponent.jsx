import React, { useCallback, useRef, useState } from 'react';
import { Day, DayCell, DayPercent } from '../Month.styled';
import CalendarModal from '../../Modal/CalendarModal';

const DayComponent = ({ calendarRef, day, waterPercentage }) => {
  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);

  const toggleModal = useCallback((modalId = null) => {
    setActiveModal(modalId);
  }, []);

  return (
    <DayCell key={day}>
      {activeModal === day && (
        <CalendarModal
          calendarRef={calendarRef}
          refData={ref}
          key={day}
          waterData={waterPercentage}
        />
      )}
      <Day
        ref={ref}
        onMouseLeave={() => toggleModal()}
        onMouseEnter={() => toggleModal(day)}
      >
        {day}
      </Day>
      <DayPercent>
        {waterPercentage ? `${waterPercentage.dailyNormFulfillment}%` : '-'}
      </DayPercent>
    </DayCell>
  );
};

export default DayComponent;
