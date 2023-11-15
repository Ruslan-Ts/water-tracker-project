import React, { useState } from 'react';
import UserLogoModal from '../UserLogoModal';
import { UserAvatar, UserName, UserLogoBtn, UserLogoText, UserLogoIcon } from './UserLogo.styled';
import sprite from '../../img/sprite.svg';
import { useSelector } from 'react-redux';
const UserLogo = () => {
  const name = useSelector(state => state.auth.user.name);
  const avatar = useSelector(state => state.auth.user.avatar);
  const defaultName = name ? name.slice(0, 1).toUpperCase() : 'V';

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <UserLogoBtn onClick={handleButtonClick} aria-label="User Logo">
        <UserName>{name}</UserName>
        {avatar ? (
          <UserAvatar src={avatar} alt="Avatar" />
        ) : (
          <UserLogoText>
            <p>{defaultName}</p>
          </UserLogoText>
        )}
          <UserLogoIcon>
            <svg>
              <use href={sprite + '#arrow-down'}></use>
            </svg>
          </UserLogoIcon>

      </UserLogoBtn>
      <UserLogoModal isOpen={isModalOpen} onClose={handleModalClose} />

    </div>
  );
};

export default UserLogo;
