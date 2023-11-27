import styled from 'styled-components';
import theme from '../../../../CommonStyle/themeJSX';

export const FooterContainer = styled.div`
  padding: 5px 0 10px 0;
  display: flex;
  text-align: center;
  bottom: 0;
`;

export const FooterText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const FooterBtn = styled.button`
  background-color: transparent;
  padding-left: 4px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${theme.colors.primaryAccent};
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
  svg {
    margin-left: 5px;
    width: 13px;
    height: 13px;
    fill: ${theme.colors.primaryAccent};
  }
`;
