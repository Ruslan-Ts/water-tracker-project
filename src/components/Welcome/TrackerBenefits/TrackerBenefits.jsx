import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpenDeleteEntryModal } from 'redux/modals/slice';
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
import DeleteEntryModal from 'components/Modals/DeleteEntry/DeleteEntryModal';

export const TrackerBenefits = () => {
  const dispatch = useDispatch();

  const handleOpenWaterModal = () => {
    dispatch(isOpenDeleteEntryModal('6558dbea2da25461e9f6621f'));
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
        <Button onClick={handleOpenWaterModal}>Modal2</Button>
        {isOpenDeleteEntryModal && <DeleteEntryModal />}
      </Container>
    </>
  );
};
