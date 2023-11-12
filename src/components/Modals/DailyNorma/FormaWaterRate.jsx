import React from 'react';
import { FormaCalculation, TitlePart } from './DailyNorma.styled';
import { Button } from 'CommonStyle/Button/Button.styled';
import { rateSchema } from 'js/validation/schemas';
import { useFormik } from 'formik';
import { Input } from 'components/forms/Input.styled';
import { InputError } from 'components/forms/InputError.styled';

const FormaWaterRate = () => {
  const onSubmit = e => {
    // e.preventDefault();
    // dispatch(
    //   logIn({
    //     email: e.target.elements.email.value,
    //     password: e.target.elements.password.value,
    //   })
    // );
    // e.target.reset();
  };
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
