import React from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntryThunk } from 'redux/userData/thunk';
import css from './DeleteCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { Button } from 'CommonStyle/Button/Button.styled';
import { selectorDeleteEntryModalStatus } from 'redux/modals/selectors';
import { isOpenDeleteEntryModal } from 'redux/modals/slice';

import {
  ModalWrapper,
  Wrapper,
  WrapperTitle,
  ButtonClose,
  ModalList,
  ButtonCancel,
  ButtonDelete,
} from './DeleteEntryModal.styled';

const DeleteEntryModal = () => {
  const isOpen = useSelector(selectorDeleteEntryModalStatus);
  console.log(isOpen);
  const dispatch = useDispatch();

  const handleDelete = waterId => {
    dispatch(deleteEntryThunk(waterId));
    dispatch(isOpenDeleteEntryModal(false));
  };

  const handleClose = () => {
    dispatch(isOpenDeleteEntryModal(false));
  };

  return (
    <>
      {isOpen && (
        <ReactModal
          ariaHideApp={false}
          isOpen={!!isOpen}
          onRequestClose={handleClose}
          contentLabel="Delete Entry Modal"
          className={css.content}
          overlayClassName={css.overlay}
        >
          <ModalWrapper>
            <Wrapper>
              <Title>Delete Entry</Title>
              <ButtonClose onClick={handleClose}>
                X<svg width="" height=""></svg>
              </ButtonClose>
            </Wrapper>
            <WrapperTitle>
              Are you sure you want to delete the entry?
            </WrapperTitle>
            <ModalList>
              <li>
                <Button as={ButtonCancel} onClick={handleClose}>
                  Cancel
                </Button>
              </li>
              <li>
                <Button as={ButtonDelete} onClick={handleDelete(isOpen)}>
                  Delete
                </Button>
              </li>
            </ModalList>
          </ModalWrapper>
        </ReactModal>
      )}
    </>
  );
};

export default DeleteEntryModal;
