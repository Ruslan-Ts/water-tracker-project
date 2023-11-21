import { useState } from 'react';
import { CalendarModalStyled } from './CalendarModal.styled';

const CalendarModal = ({ data }) => {
  const [first, setfirst] = useState('');
  return (
    <CalendarModalStyled>
      <h3>5, April</h3>
      <p>
        Daily norma: <span>1.5 L</span>
      </p>
      <p>
        Fulfillment of the daily norm: <span>60%</span>
      </p>
      <p>
        How many servings of water: <span>6</span>
      </p>
    </CalendarModalStyled>
  );
};

export default CalendarModal;
