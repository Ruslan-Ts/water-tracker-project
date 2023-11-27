import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: ${theme.colors.primaryDark};

  margin-bottom: ${props => props.$marginBottom || '16px'};
  margin-top: ${props => props.$marginTop || '16px'};

  @media only screen and (max-width: 767px) {
    font-size: ${theme.fontSizes.XL};
    line-height: calc(32 / 28);
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.large};
  line-height: calc(32 / 26);
  font-weight: 500;
  color: ${theme.colors.primaryDark};

  margin-bottom: ${props => props.$marginBottom || ''};
  margin-top: ${props => props.$marginTop || ''};
`;

export const TitleMedium = styled.h2`
  font-size: ${theme.fontSizes.medium};
  line-height: calc(20 / 18);
  font-weight: 500;
  color: ${theme.colors.primaryDark};

  margin-bottom: ${props => props.$marginBottom || ''};
  margin-top: ${props => props.$marginTop || ''};
`;

export const SubTitle = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;
