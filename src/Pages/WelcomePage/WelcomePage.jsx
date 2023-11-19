import { TrackerBenefits } from 'components/Welcome/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from 'components/Welcome/TrackerInfo/TrackerInfo';
import React from 'react';
import { Tracker } from './WelcomePage.styled';
import WelcomeLayout from 'components/Welcome/WelcomeLayout/WelcomeLayout';

const WelcomePage = () => {
  return (
    <>
      <WelcomeLayout>
        <div className="container">
          <Tracker>
            <TrackerBenefits />
            <TrackerInfo />
          </Tracker>
        </div>
      </WelcomeLayout>
    </>
  );
};

export default WelcomePage;
