import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const RouterLink = styled(Link)`
  font-size: 16px;
  line-height: calc(20 / 16);
  color: ${theme.colors.primaryAccent};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
`;
