import {
  DailyNormaContainer,
  Image,
  Container,
  Norma,
  NormaBtn,
  NormaContainer,
  Title,
} from './DailyNorma.styled';

import imgMob from '../../../../img/home/img-mob.png';

import { ModalContext } from 'components/ModalContext';
import { useContext } from 'react';

import DailyNormaModal from 'components/Modals/DailyNorma/DailyNorma';


export const DailyNorma = () => {
  const onClose = useContext(ModalContext);

  return (
    <>

      <Container>
        <DailyNormaContainer>
          <Title>My daily norma</Title>
          <NormaContainer>
            <Norma>1.5 L</Norma>
            <NormaBtn
              onClick={() => {
                dispatch(isOpenModalWaterRateAction(true));
              }}
            >
              Edit
            </NormaBtn>
          </NormaContainer>
        </DailyNormaContainer>
        <Image src={imgMob} alt="Bottle" />
      </Container>

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
