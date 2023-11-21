import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthNavigation = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  margin: 10px;
  background-color: rgba(0, 0, 255, 0);
`;

export const Day = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${props => (props.$isOutlineVisible ? '1px solid #ff9d43' : 'none')};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`;

export const MonthControl = styled.div`
  color: var(--primery-color-blue, #407bff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Month = styled.span``;

export const DayPercent = styled.span`
  color: var(--secondary-color-4, #9ebbff);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
`;

export const DaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 26px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    gap: 22px;
  }
`;

export const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;
