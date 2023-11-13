import styled from 'styled-components';
import { getColor } from 'js/validation/passwordStrength';

export const PasswordMeter = styled.div`
  width: ${props => {
    if (props.$score === 0) {
      return '10%';
    }
    return props.$score + '%';
  }};
  background-color: ${props => getColor(props.$score)};
  height: 5px;
  border-radius: 5px;
`;
