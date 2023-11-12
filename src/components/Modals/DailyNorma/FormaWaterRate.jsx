import React from 'react';
import { Button, FormaCalculation, TitlePart } from './DailyNorma.styled';

import { rateSchema } from 'js/validation/schemas';
import { useFormik } from 'formik';
import { Input } from 'components/forms/Input.styled';
import { InputError } from 'components/forms/InputError.styled';

const FormaWaterRate = ({ onSubmit }) => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      rate: '',
    },
    validationSchema: rateSchema,
    onSubmit,
  });

  return (
    <>
      <TitlePart>Write down how much water you will drink:</TitlePart>
      <FormaCalculation onSubmit={onSubmit}>
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
