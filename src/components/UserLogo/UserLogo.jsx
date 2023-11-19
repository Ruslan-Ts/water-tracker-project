import React, { useState } from 'react';
import UserLogoModal from '../Modals/UserLogoModal';
import { UserAvatar, UserName, UserLogoBtn, UserLogoText, UserLogoIcon, UserLogoContainer } from './UserLogo.styled';
import sprite from '../../img/sprite.svg';
import { useSelector } from 'react-redux';
import { selectorUserProfile } from '../../redux/auth/selectors';

const UserLogo = () => {
  const userProfile = useSelector(selectorUserProfile);
  const name = userProfile.userName;
  const avatar = userProfile.avatarURL;
  const defaultName = name ? name.slice(0, 1).toUpperCase() : 'V';

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <UserLogoContainer>
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
    </UserLogoContainer>
  );
};

export default UserLogo;
