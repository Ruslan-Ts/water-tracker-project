import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../../../img/sprite.svg';
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

import EditAmountModal from '../../../Modals/EditAmount/EditAmountModal.jsx';

import { fetchTodayThunk } from '../../../../redux/userData/thunk';
import { useContext, useEffect } from 'react';
import { ModalContext } from 'components/ModalContext';
import css from './Today.module.css';
import DeleteEntryModal from 'components/Modals/DeleteEntry/DeleteEntryModal';
const Today = () => {
  const dispatch = useDispatch();
  const toggleModal = useContext(ModalContext);
  const handleOpenWaterModal = () => {
    toggleModal(<AddWaterModal />);
  };
  const handleDeleteNotice = waterId => {
    toggleModal(<DeleteEntryModal waterId={waterId} />);
  };
  const handleEditNotice = ({ data }) => {
    toggleModal(<EditAmountModal data={data} />);
  };

  useEffect(() => {
    dispatch(fetchTodayThunk());
  }, [dispatch]);

  const { waterInputsForToday } = useSelector(selectorWaterCurrentDay);

  return (
    <Container>
      <h2>Today</h2>
      <Viewport>
        <TableStyled>
          <tbody>
            {waterInputsForToday.map(data => (
              <TableRow key={data._id}>
                <TableCell>
                  <img alt="Cup" style={{ width: '26px', height: '26px' }} />
                </TableCell>
                <TextCell>{data.waterVolume}</TextCell>
                <TimeCell>{data.date}</TimeCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleEditNotice({ data });
                    }}
                  >
                    <svg className={css.icon_pencil} width="16" height="16">
                      <use href={Icons + '#pencil-square'}></use>
                    </svg>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleDeleteNotice(data._id);
                    }}
                  >
                    <svg className={css.icon_trash} width="16" height="16">
                      <use href={Icons + '#trash'}></use>
                    </svg>
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
    </Container>
  );
};

export default Today;
