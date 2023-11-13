import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../CommonStyle/theme';
import { ReactComponent as HeaderIconSvg } from '../../img/icon-signin.svg';

export const HeaderContainer = styled.header`
  padding: 8px 0 24px 0;
  @media screen and (min-width: 768px) {
    padding: 16px 0 40px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export const HeaderIcon = styled(HeaderIconSvg)`
margin-left: 8px;
`;
