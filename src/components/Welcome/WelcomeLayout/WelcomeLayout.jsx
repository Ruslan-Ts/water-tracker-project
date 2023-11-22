import { WelcomeStyledLayout } from './WelcomeLayout.styled';

const WelcomeLayout = ({ children }) => {
  return (
    <>
      <WelcomeStyledLayout>{children}</WelcomeStyledLayout>
    </>
  );
};
export default WelcomeLayout;
