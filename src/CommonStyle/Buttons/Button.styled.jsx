import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const CommonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: #fff;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.primaryAccent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all ${theme.animation.cubicBezier};
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

export const HoverBtnStyled = styled.button`
  transition: color ${theme.animation.cubicBezier};

  position: relative;
  &:hover {
    color: ${theme.colors.secondaryYellow};
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.secondaryYellow};
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 100%;
  transition: background-color ${theme.animation.cubicBezier};
  &:hover {
    background-color: ${theme.colors.secondaryLightBlue};
  }
`;
