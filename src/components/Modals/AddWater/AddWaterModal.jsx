import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import Icons from '../../../img/sprite.svg';
import { selectorisOpenAddWater } from 'redux/modals/selectors';
import { isOpenAddWaterModal } from 'redux/modals/slice';
import { addWatersThunk } from 'redux/userData/thunk';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { Input } from 'components/forms/Input.styled';
import { Button } from 'CommonStyle/Buttons/Button.styled';
import css from './AddWaterCSS.module.css';
import {
  Wrapper,
  ButtonClose,
} from 'components/Modals/DeleteEntry/DeleteEntryModal.styled';
import {
  ModalWrapper,
  FormTitle,
  Label,
  Label2,
  Counter,
  BtnSign,
  CounterInput,
  Forma,
  ModalList,
  BtnSave,
  BtnCounter,
} from './AddWaterModal.styled';
import { AddWaterSchema } from 'js/validation/schemas';

const AddWaterModal = () => {
  const [counterValue, setCounterValue] = useState(50);
  const [startDate, setStartDate] = useState(new Date());
  const isOpen = useSelector(selectorisOpenAddWater);
  const dispatch = useDispatch();

  const updateWaterVolume = newValue => {
    setFieldValue('waterVolume', newValue);
  };

  const handleClose = () => {
    dispatch(isOpenAddWaterModal(false));
  };

  const handleClickPlus = e => {
    if (counterValue < 5000) {
      setCounterValue(prevValue => prevValue + 50);
      updateWaterVolume(counterValue + 50);
    }
  };

  const handleClickMinus = e => {
    if (counterValue > 0) {
      setCounterValue(prevValue => prevValue - 50);
      updateWaterVolume(counterValue - 50);
    }
  };

  const handleSave = ({ waterVolume, date }) => {
    const formattedDate = date.toISOString();
    const newWaterUsed = { waterVolume, date: formattedDate };
    console.log(newWaterUsed);
    dispatch(addWatersThunk(newWaterUsed));
  };

  const { handleSubmit, handleChange, setFieldValue, errors, touched } =
    useFormik({
      initialValues: {
        waterVolume: 50,
        date: '',
      },
      validationSchema: AddWaterSchema,
      onSubmit: values => {
        handleSave(values);
        handleClose();
      },
    });

  return (
    <>
      {isOpen && (
        <ReactModal
          ariaHideApp={false}
          isOpen={isOpen}
          onRequestClose={handleClose}
          className={css.content}
          overlayClassName={css.overlay}
        >
          <ModalWrapper>
            <Wrapper>
              <Title>Add water</Title>
              <ButtonClose onClick={handleClose}>
                <svg width="24" height="24">
                  <use href={Icons + '#close'}></use>
                </svg>
              </ButtonClose>
            </Wrapper>
            <Forma onSubmit={handleSubmit}>
              <FormTitle>Choose a value:</FormTitle>
              <Label htmlFor="counterValue">
                Amount of water:
                <Counter>
                  <BtnSign type="button" onClick={handleClickMinus}>
                    <svg width="24" height="24">
                      <use href={Icons + '#minus'}></use>
                    </svg>
                  </BtnSign>
                  <CounterInput>{counterValue}ml</CounterInput>
                  <BtnSign type="button" onClick={handleClickPlus}>
                    <svg width="24" height="24">
                      <use href={Icons + '#icon-plus'}></use>
                    </svg>
                  </BtnSign>
                </Counter>
              </Label>
              <Label htmlFor="time">
                Recording time:
                <DatePicker
                  className={css.input_container}
                  selected={startDate}
                  onChange={date => {
                    setStartDate(date);
                    setFieldValue('date', date);
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  maxDate={new Date()}
                  timeZone="UTC"
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '8px',
                  }}
                />
              </Label>

              <Label2 htmlFor="waterVolume">
                Enter the value of the water used:
                <Input
                  type="number"
                  id="waterVolume"
                  name="waterVolume"
                  onChange={handleChange}
                  value={counterValue}
                  readOnly
                />
              </Label2>

              {touched.waterVolume && errors.waterVolume && (
                <div>{errors.waterVolume}</div>
              )}
              <ModalList>
                <li>
                  <BtnCounter type="button" onClick={handleClose}>
                    {counterValue}ml
                  </BtnCounter>
                </li>
                <li>
                  <Button as={BtnSave} type="submit">
                    Save
                  </Button>
                </li>
              </ModalList>
            </Forma>
          </ModalWrapper>
        </ReactModal>
      )}
    </>
  );
};

export default AddWaterModal;
