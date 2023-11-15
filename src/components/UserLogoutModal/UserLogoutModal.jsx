import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/auth/thunk';
import {
  Backdrop,
  LogOutBtn,
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
} from './UserLogoutModal.styled';
import sprite from '../../img/sprite.svg';

const UserLogoutModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutThunk())
      .then(() => {
        dispatch({ type: 'CLEAR_USER_DATA' });
        closeModal();
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    showModal && (
      <>
        <Backdrop onClick={handleBackdropClick} />
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
            <LogOutBtn onClick={handleLogout}>Logout</LogOutBtn>
          </LogOutBtns>
        </LogOutWindow>
      </>
    )
  );
};

export default UserLogoutModal;
