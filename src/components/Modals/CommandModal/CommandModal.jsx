import React from 'react';
import {
  BtnContainer,
  CommandCloseBtn,
  CommandList, CommandListItem,
  ModalContainer,
} from './CommandModal.styled';
import CommandMember from './CommandMember';

import sprite from '../../../img/sprite.svg';
import photoRuslan from '../../../img/command/ruslan.jpeg';
import photoMykhailo from '../../../img/command/mykhailo.jpeg';
import photoAlena from '../../../img/command/alena.jpeg';
import photoDmytro from '../../../img/command/dmytro.jpeg';
import photoKate from '../../../img/command/kate.jpeg';
import photoKyrylo from '../../../img/command/kyrylo.jpeg';
import photoDaria from '../../../img/command/daria.jpeg';
import photoIakiv from '../../../img/command/iakiv.jpeg';
import photoNadiia from '../../../img/command/nadiia.jpeg';

const CommandModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <BtnContainer>
        <CommandCloseBtn onClick={closeModal}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </CommandCloseBtn>
      </BtnContainer>
      <CommandList>
        <CommandListItem>
        <CommandMember
          photoSrc={photoRuslan}
          name="Руслан"
          role="Team Lead"
          githubLink="https://github.com/Ruslan-Ts"
          linkedinLink="https://www.linkedin.com/in/ruslan-tsuman"
        />
        </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoMykhailo}
          name="Михайло"
          role="Tech Lead"
          githubLink="https://github.com/MShmatok"
          linkedinLink="https://www.linkedin.com/in/mykhailo-shmatok"
        />
        </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoAlena}
          name="Альона"
          role="Scrum Master"
          githubLink="https://github.com/AlenaLarinaAL"
          linkedinLink="https://www.linkedin.com/in/alena-larina"
        />
        </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoDmytro}
          name="Дмитро"
          role="Backend Team Lead"
          githubLink="https://github.com/Dmytro-Lys"
          linkedinLink="https://www.linkedin.com/in/dmytro-lysenko-862b60283"
        />
        </CommandListItem>
          <CommandListItem>
        <CommandMember
          photoSrc={photoKate}
          name="Катерина"
          role="Backend Developer"
          githubLink="https://github.com/Kate-Mil"
          linkedinLink="https://linkedin.com/in/kate-mil"
        />
            </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoKyrylo}
          name="Кирило"
          role="Frontend Developer"
          githubLink="https://github.com/mrcolti4"
          linkedinLink="https://www.linkedin.com"
        />
          </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoDaria}
          name="Дарʼя"
          role="Frontend Developer"
          githubLink="https://github.com/DariaKuzmenko"
          linkedinLink="https://www.linkedin.com/in/daria-kuzmenko"
        />
          </CommandListItem>
        <CommandListItem>
        <CommandMember
          photoSrc={photoIakiv}
          name="Яків"
          role="Frontend Developer"
          githubLink="https://github.com/iakivpekarskyi"
          linkedinLink="https://www.linkedin.com/in/iakiv-pekarskyi"
        />
        </CommandListItem>
        <CommandListItem>
          <CommandMember
          photoSrc={photoNadiia}
          name="Надія"
          role="Frontend Developer"
          githubLink="https://github.com/tizzifona"
          linkedinLink="https://www.linkedin.com/in/nadiia-alaieva-b6a468173"
        />
        </CommandListItem>
      </CommandList>
    </ModalContainer>
  );
};

export default CommandModal;
