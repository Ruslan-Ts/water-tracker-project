import styled from 'styled-components';
import theme from 'CommonStyle/theme';
import bg from '../../img/signup/bg-mobile.webp';

export const SignLayoutStyled = styled.section`
  display: flex;
  position: relative;
  form {
    width: 100%;
    max-width: 280px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    form {
      width: 50%;
      max-width: 336px;
    }
    picture {
      position: absolute;
      right: 0;
    }
  }
  @media screen and (min-width: 1280px) {
    form {
      width: 33.3%;
      max-width: 384px;
    }
    picture {
      width: 58.1%;
    }
  }
`;
