import styled from 'styled-components';

export const Input = styled.input`
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 12px 10px;
  color: #407bff;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #9ebbff;
  }
  &:not(:placeholder-shown):invalid {
    color: #ef5050;
    border-color: #ef5050;
  }
  ${props =>
    props.error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;
