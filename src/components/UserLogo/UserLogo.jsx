import React, { useEffect, useRef, useState } from 'react';
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

  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    const closeModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('click', closeModal);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', closeModal);

    };
  }, [isOpen, setIsOpen, modalRef]);

  return (
    <UserLogoContainer>
      <UserLogoBtn onClick={(e) => handleButtonClick(e)} ref={modalRef} aria-label="User Logo">
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
      <UserLogoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </UserLogoContainer>
  );
};

export default UserLogo;
