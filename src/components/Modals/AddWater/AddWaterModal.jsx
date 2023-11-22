import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Icons from '../../../img/sprite.svg';
import {
  addWatersThunk,
  fetchMonthThunk,
  fetchTodayThunk,
} from 'redux/userData/thunk';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from 'components/forms/Input.styled';
import { Button } from 'CommonStyle/Buttons/Button.styled';
import css from './AddWaterCSS.module.css';
import {
  ButtonClose,
} from 'components/Modals/DeleteEntry/DeleteEntryModal.styled';
import {
  Wrapper,
  Title,
  ModalWrapper,
  FormTitle,
  Label,
  Label2,
  Counter,
  BtnSign,
  CounterInput,
  Forma,
  ButtonWrapper,
  BtnSave,
  TextCounter,
} from './AddWaterModal.styled';
import { AddWaterSchema } from 'js/validation/schemas';
import { ModalContext } from 'components/ModalContext';
import { InputError } from 'components/forms/InputError.styled';

const AddWaterModal = () => {
  const [counterValue, setCounterValue] = useState(50);
  const [startDate, setStartDate] = useState(new Date());
  const toggleModal = useContext(ModalContext);

  const dispatch = useDispatch();

  const handleClose = () => {
    toggleModal();
  };

  const handleClickPlus = e => {
    if (counterValue < 5000) {
      setCounterValue(prevValue => {
        const newValue = prevValue + 50;
        setFieldValue('waterVolume', newValue);
        return newValue;
      });
    }
  };

  const handleClickMinus = e => {
    if (counterValue > 0) {
      setCounterValue(prevValue => {
        const newValue = prevValue - 50;
        setFieldValue('waterVolume', newValue);
        return newValue;
      });
    }
  };

  const handleSave = async ({ waterVolume, date }) => {
    const formattedDate = date.toISOString();
    const newWaterUsed = { waterVolume, date: formattedDate };

    await dispatch(addWatersThunk(newWaterUsed)).unwrap();
    await dispatch(fetchTodayThunk()).unwrap();
    await dispatch(fetchMonthThunk(new Date().getMonth())).unwrap();
    toggleModal();
  };

  const { handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      waterVolume: '50',
      date: startDate,
    },
    validationSchema: AddWaterSchema,
    onSubmit: values => {
      handleSave(values);
    },
  });

  return (
    <ModalWrapper>
      <Wrapper>
        <Title>Add water</Title>
        <ButtonClose onClick={handleClose}>
          <svg width="24" height="24">
            <use href={Icons + '#close'}></use>
          </svg>
        </ButtonClose>
      </Wrapper>
      <FormTitle>Choose a value:</FormTitle>
      <Forma onSubmit={handleSubmit}>
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
            onChange={e => {
              const newValue = e.target.value;
              if (newValue !== '') {
                setFieldValue('waterVolume', Number(newValue));
                setCounterValue(Number(newValue));
              } else {
                setFieldValue('waterVolume', '');
                setCounterValue('');
              }
            }}
            onBlur={() => {
              setFieldValue('waterVolume', counterValue);
            }}
            value={counterValue}
          />
        </Label2>

        {touched.waterVolume && errors.waterVolume && (
          <InputError>{errors.waterVolume}</InputError>
        )}
        <ButtonWrapper>
          <TextCounter>{counterValue}ml</TextCounter>
          <Button as={BtnSave} type="submit">
            Save
          </Button>
        </ButtonWrapper>
      </Forma>
    </ModalWrapper>
  );
};

export default AddWaterModal;
