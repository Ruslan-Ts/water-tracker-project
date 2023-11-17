import styled from 'styled-components';
import theme from '../../../../CommonStyle/theme';

export const RangeSlider = styled.input`
  width: 256px;
  height: 10px;
  appearance: none;
  background: ${theme.colors.secondaryLightBlue};
  border-radius: 10px;

  &::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    background: ${theme.colors.primaryLight};
    appearance: none;
    cursor: pointer;
    border-radius: 150px;
    border: 2px solid ${theme.colors.primaryAccent};
  }

  &::-moz-range-thumb {
    height: 14px;
    width: 25px;
    background: ${theme.colors.secondaryRed};
    appearance: none;
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid red;
  }
`;
