import styled from 'styled-components';
import bg_1x from '../../img/signup/bg-mobile-1x.png';
import bg_2x from '../../img/signup/bg-mobile-2x.png';

export const SignLayoutStyled = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  picture {
    z-index: -1;
  }
  form {
    width: 280px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-image: url(${bg_1x});
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    form {
      width: 336px;
    }
    picture {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    form {
      margin-left: auto;
      width: 384px;
      padding-top: 100px;
      padding-right: 105px;
    }
    picture {
      position: absolute;
      left: -150px;
    }
  }
`;
