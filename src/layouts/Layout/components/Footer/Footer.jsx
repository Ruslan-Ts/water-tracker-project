import React, { useContext } from 'react';
import { ModalContext } from 'components/ModalContext';
import CommandModal from 'components/Modals/CommandModal';

import { FooterBtn, FooterContainer, FooterText } from './Footer.styled';
import sprite from '../../../../img/sprite.svg';

const Footer = () => {
  const openModal = useContext(ModalContext);

  const handleButtonClick = () => {
    const modalContent = <CommandModal closeModal={() => openModal(null)} />;
    openModal(modalContent);
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterText>
          Developed by
          <FooterBtn onClick={handleButtonClick}>
            CodeCreators
            <svg className="heart">
              <use href={sprite + '#heart'}></use>
            </svg>
          </FooterBtn>
        </FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
