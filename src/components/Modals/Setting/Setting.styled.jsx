import styled from 'styled-components';
import theme from '../../../CommonStyle/theme.jsx';

export const WrapperUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    border-radius: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: ${theme.colors.primaryAccent};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
    stroke: ${theme.colors.primaryAccent};
    fill: none;
  }
  /* width: 80px;
  height: 80px;
  border-radius: 100%; */
`;
