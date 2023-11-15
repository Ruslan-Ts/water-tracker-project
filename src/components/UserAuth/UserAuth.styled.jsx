import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../CommonStyle/theme';

export const RouterLink = styled(Link)`
  position: relative;
  font-size: 16px;
  line-height: calc(20 / 16);
  color: ${theme.colors.primaryAccent};
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  };
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.secondaryYellow};
    transition: width 0.3s ease;
  };
  &:hover:before {
    width: 65%;
  }
`;

export const HeaderIcon = styled.div`
  svg {
    margin-left: 8px;
    width: 28px;
    height: 28px;
    fill: ${theme.colors.primaryLight};
    stroke: ${theme.colors.primaryDark};
  }
`;
