import { Tracker } from './WelcomePage.styled';
import { TrackerBenefits } from './compontents/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './compontents/TrackerInfo/TrackerInfo';
import WelcomeLayout from './compontents/WelcomeLayout/WelcomeLayout';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <div className="container">
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
      </div>
    </WelcomeLayout>
  );
};

export default WelcomePage;
