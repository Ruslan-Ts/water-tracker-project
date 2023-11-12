import React from 'react';
import ReactModal from 'react-modal';
import css from './SettingCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import { WrapperUpload } from './Setting.styled';

const Setting = () => {
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
        <img
          src="http://res.cloudinary.com/djujpexdy/image/upload/v1699819558/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg"
          alt="avatar"
          width={80}
        />
        <label>
          <input className="visually-hidden" type="file" accept=".jpg" />
          <button type="button" class="tiezer-close-btn">
            <svg class="trailer icon-close" width="25" height="25">
              <use href="./images/sprite.svg#icon-close"></use>
            </svg>
            <span>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>
    </ReactModal>
  );
};

export default Setting;
