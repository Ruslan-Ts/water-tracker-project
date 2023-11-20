import React from 'react';
import { Button, FormaCalculation, TitlePart } from './DailyNorma.styled';

import { rateOutSchema } from 'js/validation/schemas';
import { useFormik } from 'formik';
import { Input } from 'components/forms/Input.styled';
import { InputError } from 'components/forms/InputError.styled';
import { updateWaterRateThunk } from 'redux/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterRate } from 'redux/auth/selectors';
import { fetchTodayThunk } from 'redux/userData/thunk';

const FormaWaterRate = ({ onClose }) => {
  const dispatch = useDispatch();
  const waterRate = useSelector(selectorWaterRate);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    // resetForm,
  } = useFormik({
    initialValues: {
      rate: (waterRate / 1000).toFixed(2),
    },
    validationSchema: rateOutSchema,
    onSubmit: values => {
      dispatch(updateWaterRateThunk(values.rate))
        .unwrap()
        .then(() => {
          dispatch(fetchTodayThunk()).then(() => {
            onClose();
          });
        });
    },
  });

  return (
    <>
      <TitlePart>Write down how much water you drink in liters:</TitlePart>
      <FormaCalculation onSubmit={handleSubmit}>
        <Input
          type="number"
          step="0.001"
          name="rate"
          value={values.rate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rate && errors.rate}
        />
        {touched.rate && errors.rate && <InputError>{errors.rate}</InputError>}

        <Button type="submit">Save</Button>
      </FormaCalculation>
    </>
  );
};

export default FormaWaterRate;
