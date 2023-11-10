import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;
