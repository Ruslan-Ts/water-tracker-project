import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntryThunk, fetchTodayThunk } from 'redux/userData/thunk';

import { Title } from 'CommonStyle/Title/Title.styled';
import { Button } from 'CommonStyle/Buttons/Button.styled';

import Icons from '../../../img/sprite.svg';

import {
  ModalWrapper,
  Wrapper,
  WrapperTitle,
  ButtonClose,
  ModalList,
  ButtonCancel,
  ButtonDelete,
} from './DeleteEntryModal.styled';
import { ModalContext } from 'components/ModalContext';

const DeleteEntryModal = ({ waterId }) => {
  const dispatch = useDispatch();
  const toggleModal = useContext(ModalContext);

  const handleDelete = waterId => {
    dispatch(deleteEntryThunk(waterId))
      .unwrap()
      .then(() => {
        dispatch(fetchTodayThunk())
          .unwrap()
          .then(() => {
            handleClose();
          });
      });
  };
  const handleClose = () => {
    toggleModal();
  };

  return (
    <>
      <ModalWrapper>
        <Wrapper>
          <Title>Delete Entry</Title>
          <ButtonClose onClick={handleClose}>
            <svg width="24" height="24">
              <use href={Icons + '#close'}></use>
            </svg>
          </ButtonClose>
        </Wrapper>
        <WrapperTitle>Are you sure you want to delete the entry?</WrapperTitle>
        <ModalList>
          <li>
            <Button as={ButtonCancel} onClick={handleClose}>
              Cancel
            </Button>
          </li>
          <li>
            <Button as={ButtonDelete} onClick={() => handleDelete(waterId)}>
              Delete
            </Button>
          </li>
        </ModalList>
      </ModalWrapper>
    </>
  );
};

export default DeleteEntryModal;
