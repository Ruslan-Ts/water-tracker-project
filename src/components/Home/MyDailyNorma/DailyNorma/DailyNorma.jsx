import { isOpenModalWaterRateAction } from '../../../../redux/modals/slice';
import { useDispatch } from 'react-redux';
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

export const DailyNorma = () => {
  const dispatch = useDispatch();
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
    </>
  );
};
