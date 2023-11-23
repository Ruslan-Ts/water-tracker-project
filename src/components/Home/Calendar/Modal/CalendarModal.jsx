import { scaleYVariants } from 'js/animations/variants';
import { CalendarModalStyled } from './CalendarModal.styled';

const CalendarModal = ({ calendarRef, refData, waterData = {} }) => {
  const { data, waterRate, dailyNormFulfillment, servingOfWater } = waterData;

  const currentRef = refData?.current.getBoundingClientRect().left;
  const containerRef = calendarRef?.current.getBoundingClientRect().left;

  let position = true;

  const delta = currentRef - containerRef;
  if (delta < 300) {
    position = false;
  }

  return (
    <CalendarModalStyled
      variants={scaleYVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      $delta={position}
      $deltaNum={delta}
    >
      {Object.values(waterData).length ? (
        <>
          <h3>{data}</h3>
          <p>
            Daily norma: <span>{waterRate} L</span>
          </p>
          <p>
            Fulfillment of the daily norm: <span>{dailyNormFulfillment}%</span>
          </p>
          <p>
            How many servings of water: <span>{servingOfWater}</span>
          </p>
        </>
      ) : (
        <h3>You don't have info about this day.</h3>
      )}
    </CalendarModalStyled>
  );
};

export default CalendarModal;
