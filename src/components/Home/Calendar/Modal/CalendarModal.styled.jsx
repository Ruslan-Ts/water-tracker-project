import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const CalendarModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 292px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 16px;
  h3 {
    color: ${theme.colors.primaryAccent};
    font-size: ${theme.fontSizes.small};
    line-height: calc(20 / 16);
  }
  p {
    color: ${theme.colors.primaryDark};
    font-size: ${theme.fontSizes.small};
    line-height: calc(20 / 16);
    span {
      color: ${theme.colors.primaryAccent};
      font-size: ${theme.fontSizes.medium};
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`;
