import { SignLayoutStyled } from './SignLayout.styled';

import imgDesk from '../../img/signup/bottle-desk-1x.webp';
import imgDesk2x from '../../img/signup/bottle-desk-2x.webp';
import imgTablet from '../../img/signup/bottle-tab-1x.webp';
import imgTablet2x from '../../img/signup/bottle-tab-2x.webp';
import imgMob from '../../img/signup/bottle-mob-1x.webp';
import imgMob2x from '../../img/signup/bottle-mob-2x.webp';
import imgDeskPng from '../../img/signup/bottle-desk-1x.png';
import imgDeskPng2x from '../../img/signup/bottle-desk-2x.png';
import imgTabletPng from '../../img/signup/bottle-tab-1x.png';
import imgTabletPng2x from '../../img/signup/bottle-tab-2x.png';
import imgMobPng from '../../img/signup/bottle-mob-1x.png';
import imgMobPng2x from '../../img/signup/bottle-mob-2x.png';

const SignLayout = ({ children, signIn }) => {
  return (
    <section className={'section-main-container'}>
      <SignLayoutStyled className={signIn ? 'sign-in' : ''}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${imgDesk} 1x, ${imgDesk2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${imgDeskPng} 1x, ${imgDeskPng2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgTabletPng} 1x, ${imgTabletPng2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imgMob} 1x, ${imgMob2x} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imgMobPng} 1x, ${imgMobPng2x} 2x`}
            type="image/png"
          />
          <img src={imgDeskPng} alt="Responsive" />
        </picture>
        {children}
      </SignLayoutStyled>
    </section>
  );
};

export default SignLayout;
