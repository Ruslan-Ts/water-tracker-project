import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpenAddWaterModal } from 'redux/modals/slice';
import { Button } from 'CommonStyle/Button/Button.styled';
import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
  CalendarIcon,
  StatisticsIcon,
  SettingsIcon,
} from './TrackerBenefits.styled';
import { MainTitle, SubTitle } from 'CommonStyle/Title/Title.styled';
import AddWaterModal from 'components/Modals/AddWater/AddWaterModal';

export const TrackerBenefits = () => {
  const dispatch = useDispatch();

  const handleOpenWaterModal = () => {
    dispatch(isOpenAddWaterModal(true));
  };

  return (
    <>
      <Container>
        <MainTitle>Water consumption tracker</MainTitle>
        <Descr>Record daily water intake and track</Descr>
        <SubTitle>Tracker Benefits</SubTitle>
        <BenefitsList>
          <BenefitsItems>
            <CalendarIcon />
            Habit drive
          </BenefitsItems>
          <BenefitsItems>
            <StatisticsIcon />
            View statistics
          </BenefitsItems>
          <BenefitsItems>
            <SettingsIcon />
            Personal rate setting
          </BenefitsItems>
        </BenefitsList>
        <Button type="submit">Try tracker</Button>
        <Button onClick={handleOpenWaterModal}>Modal</Button>
        {isOpenAddWaterModal && <AddWaterModal />}
      </Container>
    </>
  );
};
