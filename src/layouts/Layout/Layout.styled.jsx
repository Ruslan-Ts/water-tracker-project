import styled from 'styled-components';

import bg_desk_1x from './bg/bg-main-desk-1x.png';
import bg_desk_2x from './bg/bg-main-desk-2x.png';
import bg_tab_1x from './bg/bg-main-tab-1x.png';
import bg_tab_2x from './bg/bg-main-tab-2x.png';
import bg_mob_1x from './bg/bg-main-mob-1x.png';
import bg_mob_2x from './bg/bg-main-mob-2x.png';

export const LayoutStyled = styled.div`
  justify-content: space-between;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-image: url(${bg_mob_1x});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;

  main {
    height: 100%;
    /* position: relative; */
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_mob_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bg_tab_1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tab_2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bg_desk_1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bg_desk_2x});
  }
`;
