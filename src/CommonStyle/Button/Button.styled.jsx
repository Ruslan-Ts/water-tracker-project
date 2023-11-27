import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.primaryLight};
  width: 100%;
  padding: 8px 30px;

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
    width: ${props => props.$width || '100%'};
    margin-left: ${props => props.$marginLeft || ''};
    margin-right: ${props => props.$marginRight || ''};
    font-size: 18px;
    line-height: calc(24 / 18);
    padding: 10px 30px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: ${theme.colors.primaryLight};
  }
`;

export const ButtonEscape = styled(ButtonBase)`
  color: ${theme.colors.primaryAccent};
  background-color: ${theme.colors.secondaryLightBlue};
`;

export const ButtonAccept = styled(ButtonBase)`
  color: ${theme.colors.primaryLight};
  background-color: ${theme.colors.secondaryRed};
`;

export const ButtonAccentLine = styled.button`
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
    transition: width ${theme.animation.cubicBezier};
  }
  &:hover:before {
    width: 100%;
  }
`;
