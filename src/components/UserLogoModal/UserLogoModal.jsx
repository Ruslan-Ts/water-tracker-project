import React, { useRef, useState } from 'react';
import UserLogoutModal from '../UserLogoutModal';
import {
  LogoModalMenu,
  ModalMenuBtn,
  ModalMenuIcon,
} from './UserLogoModal.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch } from 'react-redux';
import { isOpenModalSetting } from 'redux/modals/slice';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

  const handleSettingButtonClick = () => {
    if (onClose && typeof onClose === 'function') {
      dispatch(isOpenModalSetting(true));
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
