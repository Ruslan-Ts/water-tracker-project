import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../../img/main-logo.svg';
import { Logo, LogoIcon, LogoText } from './HeaderLogo.styled';

const HeaderLogo = () => (
  <Link to={'/'}>
    <Logo>
      <LogoIcon src={Icon} alt="Logo" />
      <LogoText>
        Tracker <br /> of water
      </LogoText>
    </Logo>
  </Link>
);

export default HeaderLogo;
