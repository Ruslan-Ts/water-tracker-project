import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { logOutThunk } from '../../../redux/auth/thunk';
import {
  CustomReactModal,
  LogOutBtn,
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
} from './UserLogoutModal.styled';
import sprite from '../../../img/sprite.svg';
import css from './UserLogoutModal.module.css';
import { ModalContext } from '../../ModalContext';

ReactModal.setAppElement('#root');

const UserLogoutModal = () => {
  const dispatch = useDispatch();
  const onClose = useContext(ModalContext);

  const handleLogout = () => {
    dispatch(logOutThunk())
      .then(() => {
        dispatch({ type: 'CLEAR_USER_DATA' });
        onClose();
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const handleCancel = () => {
    onClose();
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <CustomReactModal
      isOpen={true}
      onRequestClose={handleCancel}
      contentLabel="Log Out Modal"
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <LogOutWindow>
        <LogOutHeader>
          <p>Log out</p>
          <LogOutClose onClick={handleCancel}>
            <svg>
              <use href={sprite + '#close'}></use>
            </svg>
          </LogOutClose>
        </LogOutHeader>
        <LogOutText>
          <p>Do you really want to leave?</p>
        </LogOutText>
        <LogOutBtns>
          <LogOutBtn onClick={handleCancel}>Cancel</LogOutBtn>
          <LogOutBtn onClick={handleLogout}>Log out</LogOutBtn>
        </LogOutBtns>
      </LogOutWindow>
    </CustomReactModal>
  );
};

export default UserLogoutModal;
