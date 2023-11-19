import cup from '../cup.svg';
import pencil from '../pencil.svg';
import trash from '../trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenAddWaterModal } from '../../../../redux/modals/slice';
import {
  Viewport,
  TableStyled,
  TableRow,
  TableCell,
  TextCell,
  TimeCell,
  Button,
  Container,
  AddButton,
} from './Today.styled';
import AddWaterModal from '../../../Modals/AddWater/AddWaterModal';
import { selectorWaterCurrentDay } from '../../../../redux/userData/selectors';

import { fetchTodayThunk } from '../../../../redux/userData/thunk';

const Today = () => {
  const dispatch = useDispatch();
  const handleOpenWaterModal = () => {
    dispatch(isOpenAddWaterModal(true));
  };

  const handleModalClose = () => {
    dispatch(fetchTodayThunk());
  };

  const waterData = useSelector(selectorWaterCurrentDay);
  const { waterInputsForToday } = waterData;

  return (
    <Container>
      <h2>Today</h2>
      <Viewport>
        <TableStyled>
          <tbody>
            {waterInputsForToday.map(data => (
              <TableRow key={data._id}>
                <TableCell>
                  <img
                    src={cup}
                    alt="Cup"
                    style={{ width: '26px', height: '26px' }}
                  />
                </TableCell>
                <TextCell>{data.waterVolume}</TextCell>
                <TimeCell>{data.date}</TimeCell>
                <TableCell>
                  <Button>
                    <img
                      src={pencil}
                      alt="Delete"
                      style={{ width: '16px', height: '16px' }}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button>
                    <img
                      src={trash}
                      alt="Delete"
                      style={{ width: '16px', height: '16px' }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableStyled>
        <AddButton type="submit" onClick={handleOpenWaterModal}>
          + Add water
        </AddButton>
      </Viewport>

      {isOpenAddWaterModal && <AddWaterModal onClose={handleModalClose} />}
    </Container>
  );
};

export default Today;
