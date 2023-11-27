import styled from 'styled-components';

export const CalendarWrap = styled.div`
  border-radius: 10px;
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
  display: flex;
  padding: 24px 8px;
  flex-direction: column;
  gap: 24px;
  width: 280px;
  margin: 0 auto;


  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 50%;
    padding: 32px 24px;
  }
`;
