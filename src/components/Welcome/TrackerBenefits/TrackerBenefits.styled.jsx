import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const BenefitsList = styled.ul`
  font-size: ${theme.fontSizes.small};
  line-height: calc(20 / 16);
`;
export const BenefitsItems = styled.li`
  margin-bottom: 16px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Descr = styled.p`
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${theme.colors.primaryDark};
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    line-height: calc(32 / 26);
  }
`;
export const Container = styled.div`
  @media only screen and (min-width: 1440px) {
    font-size: ${theme.fontSizes.large};
    margin-right: 81px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1439px) {
    margin-bottom: 60px;
  }
`;
