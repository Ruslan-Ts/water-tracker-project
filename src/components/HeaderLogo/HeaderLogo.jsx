import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../img/main-logo.svg';

const HeaderLogo = ({ isAuthenticated }) => (
  <Link to={isAuthenticated ? '/home' : '/'}>
    <img src={Icon} alt="Logo" />
  </Link>
);

export default HeaderLogo;
