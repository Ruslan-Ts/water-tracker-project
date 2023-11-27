import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthNavigation = styled.div`
  h2 {
    color: #2f2f2f;
    font-size: 24px;
    font-weight: 500;
    line-height: calc(30 / 24);

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: calc(32 / 26);
    }
    @media screen and (min-width: 1440px) {
    }
  }

  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  margin: 0 10px;
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

export const Month = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const DayPercent = styled.span`
  color: var(--secondary-color-4, #9ebbff);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: calc(16 / 10);
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;

export const DaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  column-gap: 26px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`;

export const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   position: relative;
`;
