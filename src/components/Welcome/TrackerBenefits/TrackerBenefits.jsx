import { Button } from 'CommonStyle/Button/Button.styled';
import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
} from './TrackerBenefits.styled';
import { MainTitle, SubTitle } from 'CommonStyle/Title/Title.styled';

export const TrackerBenefits = () => {
  return (
    <>
      <Container>
        <MainTitle>Water consumption tracker</MainTitle>
        <Descr>Record daily water intake and track</Descr>
        <SubTitle>Tracker Benefits</SubTitle>
        <BenefitsList>
          <BenefitsItems>Habit drive</BenefitsItems>
          <BenefitsItems>View statistics</BenefitsItems>
          <BenefitsItems>Personal rate setting</BenefitsItems>
        </BenefitsList>
        <Button type="submit">Try tracker</Button>
      </Container>
    </>
  );
};
