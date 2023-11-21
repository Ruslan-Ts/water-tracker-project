import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const CommonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: all ${theme.animation.cubicBezier};
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  background-color: ${theme.colors.primaryAccent};
  color: #fff;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: ${theme.colors.secondaryBlue};
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const Button = styled(CommonStyles)`
  width: 280px;
  height: 36px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
