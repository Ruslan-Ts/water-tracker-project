import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const FormLabel = styled.label`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
