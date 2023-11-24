import React from 'react';
import sprite from '../../../img/sprite.svg';
import {
  CommandHeader,
  CommandLink,
  CommandPhoto,
  CommandText,
  ContainerMember, Links,
  SocialIcon,
} from './CommandMember.styled';


const CommandMember = ({ photoSrc, name, role, githubLink, linkedinLink }) => {
  return (
    <ContainerMember>
      <CommandPhoto src={photoSrc} alt={name} />
      <CommandHeader>{name}</CommandHeader>
      <CommandText>{role}</CommandText>
      <Links>
        <CommandLink href={githubLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <svg>
              <use href={sprite + '#github'}></use>
            </svg>
          </SocialIcon>
        </CommandLink>
        <CommandLink href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <svg>
              <use href={sprite + '#linkedin'}></use>
            </svg>
          </SocialIcon>
        </CommandLink>
      </Links>
    </ContainerMember>
  );
};

export default CommandMember;
