import styled from 'styled-components';
import theme from 'CommonStyle/theme';

export const Input = styled.input`
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 12px 10px;
  color: ${theme.colors.primaryAccent};
  border: 1px solid ${theme.colors.secondaryLightBlue};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:not(:placeholder-shown):invalid {
    color: ${theme.colors.secondaryRed};
    border-color: ${theme.colors.secondaryRed};
  }
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;
