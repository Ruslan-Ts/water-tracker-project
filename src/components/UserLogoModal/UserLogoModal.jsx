import React, { useEffect, useRef, useState } from 'react';
import UserSettingsModal from '../Settings/Settings';
import UserLogoutModal from '../UserLogoutModal';
import { LogoModalMenu, ModalMenuBtn, ModalMenuIcon } from './UserLogoModal.styled';
import sprite from '../../img/sprite.svg';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

  const handleSettingButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  const handleLogoutButtonClick = () => {
    setUserLogoutModalOpen(true);
  };

  const handleCloseUserLogoutModal = () => {
    setUserLogoutModalOpen(false);
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (isUserLogoutModalOpen) {
          handleCloseUserLogoutModal();
        } else if (onClose && typeof onClose === 'function') {
          onClose();
        }
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isUserLogoutModalOpen) {
          handleCloseUserLogoutModal();
        } else if (onClose && typeof onClose === 'function') {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isUserLogoutModalOpen, handleCloseUserLogoutModal]);

  return (
    <>
      {isOpen && !isUserLogoutModalOpen && (
        <LogoModalMenu ref={modalRef}>
          <ModalMenuBtn onClick={handleSettingButtonClick}>
            <ModalMenuIcon>
              <svg>
                <use href={sprite + '#settings'}></use>
              </svg>
            </ModalMenuIcon>
            Setting
          </ModalMenuBtn>
          <ModalMenuBtn onClick={handleLogoutButtonClick}>
            <ModalMenuIcon>
              <svg>
                <use href={sprite + '#logout'}></use>
              </svg>
            </ModalMenuIcon>
            Log out
          </ModalMenuBtn>
        </LogoModalMenu>
      )}
      {isUserLogoutModalOpen && (
        <UserLogoutModal
          showModal={isUserLogoutModalOpen}
          closeModal={handleCloseUserLogoutModal}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default UserLogoModal;
