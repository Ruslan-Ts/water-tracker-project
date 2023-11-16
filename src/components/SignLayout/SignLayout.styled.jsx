import styled from 'styled-components';
import bg_1x from '../../img/signup/bg-mobile-1x.png';
import bg_2x from '../../img/signup/bg-mobile-2x.png';

export const SignLayoutStyled = styled.div`
  display: flex;
  position: relative;
  picture {
    z-index: -1;
  }
  form {
    width: 100%;
    max-width: 280px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-image: url(${bg_1x});
  }

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${bg_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    form {
      width: 50%;
      max-width: 336px;
    }
    picture {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    form {
      width: 33.3%;
      max-width: 384px;
    }
    picture {
      width: 58.1%;
    }
  }
`;
