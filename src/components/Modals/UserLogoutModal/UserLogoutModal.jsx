import React from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { logOutThunk } from '../../../redux/auth/thunk';
import {
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
} from './UserLogoutModal.styled';
import sprite from '../../../img/sprite.svg';
import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';
import Button from 'CommonStyle/Button';

ReactModal.setAppElement('#root');

const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

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

  return (
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>
        <LogOutClose onClick={handleCancel}>
          <HoverCloseBtn>
            <svg>
              <use href={sprite + '#close'}></use>
            </svg>
          </HoverCloseBtn>
        </LogOutClose>
      </LogOutHeader>
      <LogOutText>
        <p>Do you really want to leave?</p>
      </LogOutText>
      <LogOutBtns>
        <Button typeStyle="escape" $width="160px" onClick={handleCancel}>
          Cancel
        </Button>
        <Button typeStyle="accept" $width="160px" onClick={handleLogout}>
          Log out
        </Button>
      </LogOutBtns>
    </LogOutWindow>
  );
};

export default UserLogoutModal;
