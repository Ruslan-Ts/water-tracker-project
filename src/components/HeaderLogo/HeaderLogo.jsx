import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../img/main-logo.svg';
import { Logo, LogoIcon } from './HeaderLogo.styled';

const HeaderLogo = () => (
    <Link to={'/'}>
      <Logo>
        <LogoIcon src={Icon} alt="Logo" />
        <span>
          Tracker <br /> of water
        </span>
      </Logo>
    </Link>
);

export default HeaderLogo;

