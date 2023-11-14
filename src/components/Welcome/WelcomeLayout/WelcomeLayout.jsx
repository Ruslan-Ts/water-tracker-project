import { WelcomeStyledLayout } from './WelcomeLayout.styled';
import bgDesktop from '../../../img/welcome/bg-desktop.png';
import bgTablet from '../../../img/welcome/bg-tablet.png';
import bgMob from '../../../img/welcome/bg-mobile.png';

const WelcomeLayout = ({ children }) => {
  return (
    <>
      <WelcomeStyledLayout>
        <picture>
          <source media="(min-width:1200px)" srcSet={bgDesktop} />
          <source media="(min-width:768px)" srcSet={bgTablet} />
          <source media="(max-width:767px)" srcSet={bgMob} />
        </picture>
        {children}
      </WelcomeStyledLayout>
    </>
  );
};
export default WelcomeLayout;
