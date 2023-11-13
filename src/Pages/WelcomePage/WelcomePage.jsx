import { TrackerBenefits } from 'components/Welcome/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from 'components/Welcome/TrackerInfo/TrackerInfo';
import React from 'react';
import { Tracker } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <>
      <Tracker>
        <TrackerBenefits />
        <TrackerInfo />
      </Tracker>
    </>
  );
};

export default WelcomePage;
