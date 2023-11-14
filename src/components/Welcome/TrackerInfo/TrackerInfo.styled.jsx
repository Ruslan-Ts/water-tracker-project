import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const TrackerInfoContainer = styled.div`
  background-color: ${theme.colors.secondaryLight};
  padding: 24px 16px;
  border-radius: 10px;

  @media screen and (min-width: 480px) and (max-width: 1279px) {
    width: 494px;
  }
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;
export const InfoList = styled.ul``;
export const InfoItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: ${theme.fontSizes.small};
  line-height: calc(20 / 16);

  &::before {
    content: '';
    border-color: ${theme.colors.primaryAccent};
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
