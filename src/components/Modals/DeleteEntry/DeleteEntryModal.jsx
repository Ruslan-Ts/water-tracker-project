import React from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import css from './DeleteCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { Button } from 'CommonStyle/Button/Button.styled';
import { selectorDeleteEntryModalStatus } from 'redux/modals/selectors';
import { isOpenDeleteEntryModal } from 'redux/modals/slice';

import {
  ModalWrapper,
  ModalContent,
  Wrapper,
  ButtonClose,
  ModalList,
  ButtonCancel,
  ButtonDelete,
} from './DeleteEntryModal.styled';

const DeleteEntryModal = () => {
  const isOpen = useSelector(selectorDeleteEntryModalStatus);
  const dispatch = useDispatch();

  const handleDelete = () => {
    // запрос на удаление
    dispatch(isOpenDeleteEntryModal(false));
  };

  const handleClose = () => {
    dispatch(isOpenDeleteEntryModal(false));
  };

  return (
    <>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={handleClose}
          contentLabel="Delete Entry Modal"
          className={css.content}
        >
          <ModalWrapper>
            <ModalContent>
              <Wrapper>
                <Title>Delete Entry</Title>
                <ButtonClose onClick={handleClose}>
                  X<svg width="" height=""></svg>
                </ButtonClose>
              </Wrapper>
              <p>Are you sure you want to delete the entry?</p>
              <ModalList>
                <li>
                  <Button as={ButtonCancel} onClick={handleClose}>
                    Cancel
                  </Button>
                </li>
                <li>
                  <Button as={ButtonDelete} onClick={handleDelete}>
                    Delete
                  </Button>
                </li>
              </ModalList>
            </ModalContent>
          </ModalWrapper>
        </ReactModal>
      )}
    </>
  );
};

export default DeleteEntryModal;
