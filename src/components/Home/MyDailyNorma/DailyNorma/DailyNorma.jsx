import { isOpenModalWaterRateAction } from '../../../../redux/modals/slice';
import { useDispatch } from 'react-redux';
import {
  DailyNormaContainer,
  Norma,
  NormaBtn,
  NormaContainer,
  Title,
} from './DailyNorma.styled';

export const DailyNorma = () => {
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};
