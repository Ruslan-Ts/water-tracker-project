import styled from 'styled-components';
import theme from '../../../CommonStyle/theme';

export const ModalContainer = styled.div`
  padding: 10px;
  background-color: ${theme.colors.primaryLight};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 90vh;
  width: 290px;
  @media screen and (min-width: 768px) {
    width: 650px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;

export const CommandList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;

    gap: 15px;
  }
`;

export const CommandListItem = styled.li`
  border: ${theme.colors.primaryAccent} solid 2px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:not(:last-child){
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;

export const CommandCloseBtn = styled.button `
  background-color: ${theme.colors.primaryLight};
  transition: transform 0.5s ease-out;
  padding: 4px;
  width: 32px;
  height: 32px;
  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.primaryLight};
    stroke: ${theme.colors.primaryAccent};
    &:hover {
      transform: scale(1.15);
    }
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;

