import { useNavigate } from 'react-router-dom';
import { Button } from 'CommonStyle/Buttons/Button.styled';
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
  const navigate = useNavigate();
  function TryClick() {
    navigate('/signup');
  }
  return (
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

      <Button type="button" onClick={TryClick}>
        Try tracker
      </Button>
    </Container>
  );
};
