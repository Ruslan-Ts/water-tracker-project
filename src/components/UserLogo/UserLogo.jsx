import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectorUserProfile } from '../../redux/auth/selectors';
import UserLogoModal from '../Modals/UserLogoModal';
import {
  UserAvatar,
  UserName,
  UserLogoBtn,
  UserLogoText,
  UserLogoIcon,
  UserLogoContainer,
} from './UserLogo.styled';

import { rotate180DegVariants } from 'js/animations/variants';

import sprite from '../../img/sprite.svg';

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
        <UserLogoIcon
          variants={rotate180DegVariants}
          animate={isModalOpen ? 'rotate' : 'stop'}
        >
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
