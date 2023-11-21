import styled from 'styled-components';
import bg from '../../../img/welcome/bg-desktop.png';
import bgTablet from '../../../img/welcome/bg-tablet.png';
import bgMobile from '../../../img/welcome/bg-mobile.png';

export const WelcomeStyledLayout = styled.section`
  min-height: calc(100vh - 80px);
  background-image: url(${bgMobile});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  /* min-height: 100%;
  inset: 0;

  background-size: 100%; */

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 104px);
    background-image: url(${bgTablet});

    background-size: 100%;
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 140px);
    padding-top: 40px;
    background-image: url(${bg});
  }
`;
