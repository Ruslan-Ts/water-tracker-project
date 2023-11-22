import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const CalendarModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 60px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;

  @media screen and (max-width: 767px) {
    /* left: 50%; */
    left: ${props => 132 - props.$deltaNum}px;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    right: ${props => (props.$delta ? '17px' : '')};
    left: ${props => (props.$delta ? '' : '17px')};
    padding: 24px 16px;
    width: 292px;
  }

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

  &::before {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 20px;
    width: 0;
    height: 0;
    border-color: #f9f9f9 transparent transparent transparent;
    border-width: 10px;
    border-style: solid;
  }
`;
