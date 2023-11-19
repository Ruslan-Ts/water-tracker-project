import {
  DailyNormaContainer,
  Norma,
  NormaBtn,
  NormaContainer,
  Title,
} from './DailyNorma.styled';
import { ModalContext } from 'components/ModalContext';
import { useContext } from 'react';

import DailyNormaModal from 'components/Modals/DailyNorma/DailyNorma';

export const DailyNorma = () => {
  const onClose = useContext(ModalContext);

  return (
    <>
      <DailyNormaContainer>
        <Title>My daily norma</Title>
        <NormaContainer>
          <Norma>1.5 L</Norma>
          <NormaBtn
            onClick={() => {
              onClose(<DailyNormaModal />);
            }}
          >
            Edit
          </NormaBtn>
        </NormaContainer>
      </DailyNormaContainer>
    </>
  );
};
