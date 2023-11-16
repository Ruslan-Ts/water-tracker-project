import { Link } from 'react-router-dom';
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

export const TrackerBenefits = () => {
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
        <Link to="/signup">
          <Button type="submit">Try tracker</Button>
        </Link>
      </Container>
    </>
  );
};
