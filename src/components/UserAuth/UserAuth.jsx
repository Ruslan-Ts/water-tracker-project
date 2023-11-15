import React from 'react';
import { RouterLink, HeaderIcon } from './UserAuth.styled';
import sprite from '../../img/sprite.svg';

const UserAuth = () => (
  <RouterLink to="/signin">Sign in<HeaderIcon>
    <svg>
      <use href={sprite + '#user'}></use>
    </svg>
  </HeaderIcon>
  </RouterLink>
);

export default UserAuth;
