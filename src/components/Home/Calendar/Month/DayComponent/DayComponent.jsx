import { useCallback, useEffect, useRef, useState } from 'react';
import { Day, DayCell, DayPercent } from '../Month.styled';
import CalendarModal from '../../Modal/CalendarModal';

const DayComponent = ({ calendarRef, day, waterPercentage }) => {
  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = useCallback((modalId = null) => {
    setActiveModal(prevModal => (prevModal === modalId ? null : modalId));
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
        onClick={() => toggleModal(day)}
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
};

export default DayComponent;
