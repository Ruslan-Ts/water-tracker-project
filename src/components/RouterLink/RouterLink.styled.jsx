import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RouterLink = styled(Link)`
  font-size: 16px;
  line-height: calc(20 / 16);
  color: #407bff;
  text-decoration: none;
  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;
