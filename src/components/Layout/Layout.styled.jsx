import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  padding: 8px 0 24px 0;

  @media screen and (min-width: 768px) {
    padding: 16px 0 40px 0;
  }
`;
