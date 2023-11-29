import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Icons from '../../../img/sprite.svg';
import {
  editWatersThunk,
  fetchMonthThunk,
  fetchTodayThunk,
} from 'redux/userData/thunk';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { Input } from 'components/forms/Input.styled';
import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';
import css from './EditAmountCSS.module.css';
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
  ButtonWrapper,
  BtnSave,
  TextCounter,
  CounterScore,
  ImgCont,
  TimeCell,
  TextCell,
} from './EditAmountModal.styled';
import { AddWaterSchema } from 'js/validation/schemas';
import { ModalContext } from 'components/ModalContext';
import { InputError } from 'components/forms/InputError.styled';
import Button from 'CommonStyle/Button';

const EditAmountModal = data => {
  const [counterValue, setCounterValue] = useState(data.data.waterVolume);
  const [startDate, setStartDate] = useState(new Date(data.data.date));
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
    const newWaterUsed = { waterVolume, date };

    await dispatch(
      editWatersThunk({ newWaterUsed, id: data.data._id })
    ).unwrap();
    await dispatch(fetchTodayThunk()).unwrap();
    await dispatch(fetchMonthThunk(new Date().getMonth())).unwrap();
    toggleModal();
  };

  const { handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      waterVolume: data.data.waterVolume,
      date: data.data.date,
    },
    validationSchema: AddWaterSchema,
    onSubmit: values => {
      handleSave(values);
    },
  });

  return (
    <ModalWrapper>
      <Wrapper>
        <Title>Edit the entered amount of water</Title>
        <ButtonClose onClick={handleClose}>
          <HoverCloseBtn>
            <svg width="24" height="24">
              <use href={Icons + '#close'}></use>
            </svg>
          </HoverCloseBtn>
        </ButtonClose>
      </Wrapper>
      <Forma onSubmit={handleSubmit}>
        <CounterScore>
          <ImgCont>
            <svg className={css.cup} width="26" height="26">
              <use href={Icons + '#cup'}></use>
            </svg>
          </ImgCont>

          <TextCell>{data.data.waterVolume} ml</TextCell>
          <TimeCell>
            {new Intl.DateTimeFormat('en', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            }).format(new Date(data.data.date))}
          </TimeCell>
        </CounterScore>
        <FormTitle>Correct entered data:</FormTitle>
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
              setFieldValue('date', date.toISOString());
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

export default EditAmountModal;
