import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectorWaterCurrentDay } from 'redux/userData/selectors';
import { fetchTodayThunk } from 'redux/userData/thunk';

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
  ImgCont,
} from './Today.styled';

import { ModalContext } from 'components/ModalContext';
import AddWaterModal from 'components/Modals/AddWater/AddWaterModal';
import DeleteEntryModal from 'components/Modals/DeleteEntry/DeleteEntryModal';
import EditAmountModal from 'components/Modals/EditAmount/EditAmountModal';

import css from './Today.module.css';
import Icons from '../../../../../img/sprite.svg';

const Today = () => {
  const dispatch = useDispatch();
  const toggleModal = useContext(ModalContext);
  const { waterInputsForToday } = useSelector(selectorWaterCurrentDay);
  const listRef = useRef(null);

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

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [waterInputsForToday]);

  return (
    <Container>
      <h2>Today</h2>
      <Viewport ref={listRef}>
        <TableStyled>
          <tbody>
            {waterInputsForToday
              .toSorted(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime()
              )
              .map(data => (
                <TableRow key={data._id}>
                  <TableCell>
                    <ImgCont>
                      <svg className={css.cup} width="26" height="26">
                        <use href={Icons + '#cup'}></use>
                      </svg>
                    </ImgCont>
                  </TableCell>
                  <TextCell>{data.waterVolume} ml</TextCell>
                  <TimeCell>
                    {new Intl.DateTimeFormat('en', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    }).format(new Date(data.date))}
                  </TimeCell>
                  <TableCell>
                    <Button
                      aria-label="Edit notice"
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
                      aria-label="Delete notice"
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
