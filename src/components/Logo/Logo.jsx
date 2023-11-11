import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colors.primaryAccent};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 4px;
`;
