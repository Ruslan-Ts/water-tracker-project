import styled from 'styled-components';
import { CommonStyles } from './Button.styled';
import theme from 'CommonStyle/theme';

export const AddButton = styled(CommonStyles)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
  svg {
    width: 32px;
    height: 32px;
    fill: none;
    stroke: ${theme.colors.primaryLight};
  }
`;
