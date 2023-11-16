import { SignLayoutStyled } from './SignLayout.styled';

import imgDesk from '../../img/signup/bottle-desk.webp';
import imgTablet from '../../img/signup/bottle-tablet.webp';
import imgMob from '../../img/signup/bottle-mob.webp';
import img from '../../img/signup/bottle-desk.png';

const SignLayout = ({ children }) => {
  return (
    <SignLayoutStyled>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={imgDesk}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={imgTablet}
          type="image/webp"
        />
        <source media="(max-width: 767px)" srcSet={imgMob} type="image/webp" />
        <img src={img} alt="Responsive" />
      </picture>
      {children}
    </SignLayoutStyled>
  );
};

export default SignLayout;
