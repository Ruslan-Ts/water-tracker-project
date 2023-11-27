import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../../CommonStyle/themeJSX';

export const RouterLink = styled(Link)`
  width: 84px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.primaryAccent};
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
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
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeaderIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  fill: ${theme.colors.primaryLight};
  stroke: ${theme.colors.primaryDark};
`;
