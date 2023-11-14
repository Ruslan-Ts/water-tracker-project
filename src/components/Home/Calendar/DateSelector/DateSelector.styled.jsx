import styled from 'styled-components';

// Styled components for the calendar layout
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ecf2ff;
  padding: 24px 8px;
  justify-content: end;

  @media screen and (min-width: 768px) {
    padding: 16px 0 40px 0;
  }
`;

export const MonthNavigation = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: end;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  margin: 0 10px;
`;

export const DaysContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const DayCell = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px black;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 1px solid #ff9d43;
  cursor: pointer;
`;

export const DayPercentage = styled.div`
  display: flexbox;
`;
