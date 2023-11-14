import styled from 'styled-components';
import bg from '../../../img/welcome/bg-desktop.png';
import bgTablet from '../../../img/welcome/bg-tablet.png';
import bgMobile from '../../../img/welcome/bg-mobile.png';

export const WelcomeStyledLayout = styled.section`
  /* padding-left: 95px;
  padding-right: 95px;
  padding-bottom: 250px; */

  @media screen and (min-width: 1280px) {
    background-image: url(${bg});
    /* background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat; */

    padding-left: 95px;
    padding-right: 95px;
    padding-bottom: 250px;
    /* margin: 0; */
  }
  @media screen and (min-width: 480px) and (max-width: 1279px) {
    background-image: url(${bgTablet});
    /* background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat; */
    /* margin: 0; */
  }

  background-image: url(${bgMobile});
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
`;
