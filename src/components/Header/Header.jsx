import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../img/main-logo.svg';
import { HeaderContainer, Navigation, RouterLink, HeaderIcon } from './Header.styled';

const HeaderComponent = ({ isAuthenticated }) => {
  return (
    <HeaderContainer>
      <div className="container">
        <Navigation>
          <Link to={isAuthenticated ? '/home' : '/'}>
            <img src={Icon} alt="Logo" />
          </Link>
          <RouterLink to="/signin">Sign in<HeaderIcon /></RouterLink>
        </Navigation>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
