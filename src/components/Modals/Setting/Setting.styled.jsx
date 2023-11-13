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

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;
  div {
    width: auto;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: ${theme.colors.primaryLight};
    background-color: ${theme.colors.primaryAccent};
  }
`;

export const WrapperForma = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperFormaMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperFormaLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperFormaRight = styled.div`
  display: flex;
  flex-direction: column;
`;
