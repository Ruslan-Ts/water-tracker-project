import styled from 'styled-components';
import theme from '../../../../CommonStyle/themeJSX';

export const LogoIcon = styled.img`
  width: 40px;
  height: 48px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primaryAccent};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 4px;
`;

export const LogoText = styled.span`
  width: 58px;
  height: 28px;
`;
