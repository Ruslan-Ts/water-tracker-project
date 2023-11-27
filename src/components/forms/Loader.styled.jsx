import theme from 'CommonStyle/themeJSX';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
 0% { transform: rotate(0deg)}
 100% { transform: rotate(360deg)}
`;

export const ButtonLoader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid ${theme.colors.secondaryLightBlue};
  border-color: ${theme.colors.secondaryLightBlue} transparent
    ${theme.colors.secondaryLightBlue} transparent;
  animation: ${loadingAnimation} 1.2s linear infinite;
`;
