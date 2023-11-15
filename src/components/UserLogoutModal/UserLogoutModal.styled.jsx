import styled from 'styled-components';
import theme from '../../CommonStyle/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.80);
  z-index: 100;
`;

export const LogOutWindow = styled.div`
  background-color: ${theme.colors.primaryLight};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 544px;
  height: 144px;
  border-radius: 10px;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const LogOutHeader = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogOutText = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const LogOutBtns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogOutBtn = styled.button`
  width: 160px;
  height: 44px;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 18px;
  background-color: ${theme.colors.secondaryRed};
  color: ${theme.colors.primaryLight};
  &:not(:last-child) {
    margin-right: 24px;
    background-color: ${theme.colors.secondaryLightBlue};
    color: ${theme.colors.primaryAccent};
  }
`;

export const LogOutClose = styled.button`
  background-color: ${theme.colors.primaryLight};
  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.primaryLight};
    stroke: ${theme.colors.primaryAccent};
  }
`;
