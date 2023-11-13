import React, { useRef } from 'react';
import ReactModal from 'react-modal';
import css from './SettingCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { Button, TitlePart } from '../DailyNorma/DailyNorma.styled';
import {
  ContainerAvatar,
  WrapperForma,
  WrapperFormaLeft,
  WrapperFormaMain,
  WrapperFormaRight,
  WrapperUpload,
} from './Setting.styled';
import Icons from '../../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserProfile } from 'redux/userData/selectors';
import { updateAvatarThunk } from 'redux/userData/thunk';

const Setting = () => {
  const filePecker = useRef(null);
  const userProfile = useSelector(selectorUserProfile);
  const dispatch = useDispatch();

  const handelChange = e => {
    const formaData = new FormData();
    formaData.append('avatar', e.target.files[0]);
    dispatch(updateAvatarThunk(formaData));
  };
  const handlerClick = () => {
    filePecker.current.click();
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={true}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <Title>Setting</Title>
      <TitlePart>Your photo</TitlePart>
      <WrapperUpload>
        <ContainerAvatar>
          {!userProfile.avatarURL && (
            <div>
              {userProfile.userName ? userProfile.userName.split('')[0] : 'V'}
            </div>
          )}
          {userProfile.avatarURL && (
            <img src={userProfile.avatarURL} alt="avatar" width={80} />
          )}
        </ContainerAvatar>

        <label>
          <input
            className="visually-hidden"
            ref={filePecker}
            type="file"
            accept=".jpg"
            onChange={handelChange}
          />
          <button type="button" onClick={handlerClick}>
            <svg width="16" height="16">
              <use href={Icons + '#arrow-up'}></use>
            </svg>
            <span>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>
      <WrapperForma>
        <WrapperFormaMain>
          <WrapperFormaLeft>LEFT</WrapperFormaLeft>
          <WrapperFormaRight>RIGHT</WrapperFormaRight>
        </WrapperFormaMain>
        <Button />
      </WrapperForma>
    </ReactModal>
  );
};

export default Setting;
