import React, { useContext, useRef } from 'react';
import UserLogoutModal from '../UserLogoutModal';
import {
  LogoModalMenu,
  ModalMenuBtn,
  ModalMenuIcon,
} from './UserLogoModal.styled';
import sprite from '../../../img/sprite.svg';
import { ModalContext } from '../../ModalContext';
import Setting from '../Setting/Setting';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const togModal = useContext(ModalContext);

  const handleSettingButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      togModal(<Setting />);
      onClose();
    }
  };

  const handleLogoutButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
      togModal(
        <UserLogoutModal
          onClose={() => {
            togModal();
          }}
        />
      );
    }
  };

  return (
    <>
      {isOpen && (
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
    </>
  );
};

export default UserLogoModal;
