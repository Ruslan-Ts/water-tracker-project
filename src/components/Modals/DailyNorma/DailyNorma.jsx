import React, { useContext, useEffect, useState } from 'react';
import { Input } from 'components/forms/Input.styled';
import {
  ContainerNorma,
  FormLabel,
  FormLabelRadio,
  FormaCalculation,
  TitlePart,
  TitleResult,
  ValueResult,
  WrapperRadio,
  WrapperResult,
} from './DailyNorma.styled';
import { rateSchema } from 'js/validation/schemas';
import { InputError } from 'components/forms/InputError.styled';
// import { Title } from 'CommonStyle/Title/Title.styled';
import { useFormik } from 'formik';
import {
  ContainerDefinition,
  LabelDefinition,
  LabelRate,
  NoticeWrapper,
  WrapperDefinition,
} from './DailyNorma.styled';
import FormaWaterRate from './FormaWaterRate';
import { CloseBtn } from '../Setting/Setting.styled';
import Icons from '../../../img/sprite.svg';
import { ModalContext } from 'components/ModalContext';
import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';
import { Title, TitleMedium } from 'CommonStyle/Title/Title.styled';

const DailyNorma = () => {
  const [result, setResult] = useState();
  const onClose = useContext(ModalContext);

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    // resetForm,
  } = useFormik({
    initialValues: {
      gender: 'girl',
      weight: 0,
      physical: 0,
    },
    validationSchema: rateSchema,
  });

  useEffect(() => {
    const calcRate = (gender, weight, physical) => {
      let result;
      switch (gender) {
        case 'girl':
          if (weight < 0 || physical < 0) {
            break;
          }
          result = weight * 0.03 + physical * 0.4;
          setResult(result.toFixed(1));
          break;

        case 'man':
          if (weight < 0 || physical < 0) {
            break;
          }
          result = weight * 0.04 + physical * 0.6;
          setResult(result.toFixed(1));
          break;

        default:
          break;
      }
    };
    calcRate(values.gender, values.weight, values.physical);
  }, [values]);

  return (
    <ContainerNorma>
      <CloseBtn
        onClick={() => {
          onClose();
        }}
      >
        <HoverCloseBtn>
          <svg width="24" height="24">
            <use href={Icons + '#close'}></use>
          </svg>
        </HoverCloseBtn>
      </CloseBtn>
      <Title>My daily norma</Title>

      <WrapperDefinition>
        <ContainerDefinition>
          <LabelRate>For girl:</LabelRate>
          <LabelDefinition>V=(M*0,03) + (T*0,4)</LabelDefinition>
        </ContainerDefinition>
        <ContainerDefinition>
          <LabelRate>For man:</LabelRate>
          <LabelDefinition>V=(M*0,04) + (T*0,6)</LabelDefinition>
        </ContainerDefinition>
      </WrapperDefinition>
      <NoticeWrapper>
        <span>*</span> V is the volume of the water norm in liters per day, M is
        your body weight, T is the time of active sports, or another type of
        activity commensurate in terms of loads (in the absence of these, you
        must set 0)
      </NoticeWrapper>
      <TitleMedium $marginTop="24px" $marginBottom="16px">
        Calculate your rate:
      </TitleMedium>

      <FormaCalculation onSubmit={handleSubmit}>
        <WrapperRadio>
          <FormLabelRadio>
            <input
              className="visually-hidden"
              type="radio"
              name="gender"
              value="girl"
              onChange={handleChange}
              defaultChecked="true"
            />
            <div></div>
            <span>For girl</span>
          </FormLabelRadio>
          <FormLabelRadio>
            <input
              className="visually-hidden"
              type="radio"
              name="gender"
              value="man"
              onChange={handleChange}
            />
            <div></div>
            <span>For man</span>
          </FormLabelRadio>
        </WrapperRadio>

        <FormLabel>
          Your weight in kilograms:
          <Input
            type="number"
            step="0.001"
            name="weight"
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.weight && errors.weight}
          />
          {touched.weight && errors.weight && (
            <InputError>{errors.weight}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          The time of active participation in sports or other activities with a
          high physical load:
          <Input
            type="number"
            step="0.001"
            name="physical"
            value={values.physical}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.physical && errors.physical}
          />
          {touched.physical && errors.physical && (
            <InputError>{errors.physical}</InputError>
          )}
        </FormLabel>
      </FormaCalculation>

      <WrapperResult>
        <TitleResult>
          The required amount of water in liters per day:
        </TitleResult>
        <ValueResult>{result} L </ValueResult>
      </WrapperResult>

      <FormaWaterRate
        onClose={() => {
          onClose();
        }}
      />
    </ContainerNorma>
  );
};

export default DailyNorma;
