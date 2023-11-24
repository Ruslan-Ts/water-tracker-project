import styled from 'styled-components';
import theme from '../../../CommonStyle/themeJSX';
import { motion } from 'framer-motion';

export const LogoModalMenu = styled(motion.div)`
  position: absolute;
  border-radius: 10px;
  z-index: 500;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  box-sizing: border-box;
  width: 118px;
  background-color: ${theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-top: 2px;
  transform-origin: top;
  right: 0;
  @media screen and (min-width: 1440px) {
    margin-top: 6px;
  }
`;

export const ModalMenuBtn = styled.button`
  background-color: ${theme.colors.primaryLight};
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

export const ModalMenuIcon = styled.div`
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
