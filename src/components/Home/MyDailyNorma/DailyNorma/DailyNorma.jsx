import { useContext } from 'react';
import {
  DailyNormaContainer,
  Container,
  Norma,
  NormaBtn,
  NormaContainer,
  Title,
  StatusContainer,
  WaterStatus,
  WaterMeter,
  WaterInfo,
} from './DailyNorma.styled';

import { AddButton } from 'CommonStyle/Buttons/AddButton.styled';
import { ModalContext } from 'components/ModalContext';
import DailyNormaModal from 'components/Modals/DailyNorma/DailyNorma';

import imgDesk from '../../../../img/home/bottle-desk-1x.webp';
import imgDesk2x from '../../../../img/home/bottle-desk-2x.webp';
import imgTablet from '../../../../img/home/bottle-tab-1x.webp';
import imgTablet2x from '../../../../img/home/bottle-tab-2x.webp';
import imgMob from '../../../../img/home/bottle-mob-1x.webp';
import imgMob2x from '../../../../img/home/bottle-mob-2x.webp';
import imgDeskPng from '../../../../img/home/bottle-desk-1x.png';
import imgDeskPng2x from '../../../../img/home/bottle-desk-2x.png';
import imgTabletPng from '../../../../img/home/bottle-tab-1x.png';
import imgTabletPng2x from '../../../../img/home/bottle-tab-2x.png';
import imgMobPng from '../../../../img/home/bottle-mob-1x.png';
import imgMobPng2x from '../../../../img/home/bottle-mob-2x.png';

import sprite from '../../../../img/sprite.svg';
import { useSelector } from 'react-redux';
import { selectorWaterCurrentDay } from 'redux/userData/selectors';
import { selectorWaterRate } from 'redux/auth/selectors';

export const DailyNorma = () => {
  const onClose = useContext(ModalContext);
  const currentDayData = useSelector(selectorWaterCurrentDay);
  const waterRate = useSelector(selectorWaterRate);

  return (
    <Container>
      <DailyNormaContainer>
        <Title>My daily norma</Title>
        <NormaContainer>
          <Norma>{(waterRate / 1000).toFixed(1)} L</Norma>
          <NormaBtn
            onClick={() => {
              onClose(<DailyNormaModal />);
            }}
          >
            Edit
          </NormaBtn>
        </NormaContainer>
      </DailyNormaContainer>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDeskPng} 1x, ${imgDeskPng2x} 2x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imgTabletPng} 1x, ${imgTabletPng2x} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${imgMob} 1x, ${imgMob2x} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${imgMobPng} 1x, ${imgMobPng2x} 2x`}
          type="image/png"
        />
        <img src={imgDeskPng} alt="Bottle" />
      </picture>
      <StatusContainer>
        <WaterStatus>
          <p>Today</p>
          <WaterMeter $filled={currentDayData.dailyNormFulfillment}>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterStatus>
        <AddButton>
          <svg>
            <use href={sprite + '#plus-circle'} />
          </svg>
          Add water
        </AddButton>
      </StatusContainer>
    </Container>
  );
};
