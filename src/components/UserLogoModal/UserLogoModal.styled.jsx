import styled from 'styled-components';
import theme from '../../CommonStyle/theme';

export const LogoModalMenu = styled.div`
  position: absolute;
  border-radius: 10px;
  z-index: 500;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  width: 118px;
  height: 88px;
  background-color: ${theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ModalMenuBtn = styled.button`
  background-color: ${theme.colors.primaryLight} ;
  color: ${theme.colors.primaryAccent};
  width: 86px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    color: ${theme.colors.secondaryYellow};
    transition: color 0.3s ease;
  }
`;

export const ModalMenuIcon= styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.primaryLight};
    stroke: ${theme.colors.primaryAccent};
  }
`;
