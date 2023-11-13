import React, { useRef } from 'react';
import ReactModal from 'react-modal';
import css from './SettingCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import { WrapperUpload } from './Setting.styled';
import Icons from '../../../img/sprite.svg';

const Setting = () => {
  const filePecker = useRef(null);
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
        <img
          src="http://res.cloudinary.com/djujpexdy/image/upload/v1699819558/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg"
          alt="avatar"
          width={80}
        />
        <label>
          <input
            className="visually-hidden"
            ref={filePecker}
            type="file"
            accept=".jpg"
          />
          <button type="button" onClick={handlerClick}>
            <svg width="16" height="16">
              <use href={Icons + '#arrow-up'}></use>
            </svg>
            <span>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>
    </ReactModal>
  );
};

export default Setting;
