import React from 'react';
import UserAuth from '../UserAuth';
import UserLogo from '../UserLogo';
import HeaderLogo from '../HeaderLogo';
import { HeaderContainer, Navigation } from './Header.styled';

const HeaderComponent = ({ isAuthenticated }) => (
  <HeaderContainer>
    <div className="container">
      <Navigation>
        <HeaderLogo isAuthenticated={isAuthenticated} />
        {isAuthenticated ? <UserLogo /> : <UserAuth />}
      </Navigation>
    </div>
  </HeaderContainer>
);

export default HeaderComponent;
