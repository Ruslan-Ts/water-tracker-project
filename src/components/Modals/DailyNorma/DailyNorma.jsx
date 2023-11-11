import theme from 'CommonStyle/theme';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import css from './DailyCSS.module.css';
import { Field, Form, Formik } from 'formik';

import { Button } from 'CommonStyle/Button/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { rateSchema, signUpSchema } from 'js/validation/schemas';
import { InputError } from 'components/forms/InputError.styled';
import { Title } from 'CommonStyle/Title/Title.styled';
import { AuthForm } from 'components/forms/AuthForm.styled';
import { useFormik } from 'formik';

const DailyNorma = () => {
  const [gender, setGenger] = useState();
  const [weight, setWeight] = useState();
  const [physical, setPhysical] = useState();
  const [result, setResult] = useState();

  const calcRate = (gender, weight, physical) => {
    let result;
    switch (gender) {
      case 'girl':
        result = weight * 0.03 + physical * 0.4;
        setResult(result);
        break;

      case 'man':
        result = weight * 0.04 + physical * 0.6;
        setResult(result);
        break;

      default:
        break;
    }
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
      gender: '',
      weight: '0',
      physical: '0',
    },
    validationSchema: rateSchema,
  });

  useEffect(() => {
    calcRate(values.gender, values.weight, values.physical);
  }, [calcRate, values]);

  return (
    <ReactModal
      isOpen={true}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <h3>My daily norma</h3>
      <div>
        <p>
          For girl:<span>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          For man:<span>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>
      <p>
        * V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </p>
      <h4>Calculate your rate:</h4>
      <p>{result}</p>

      <AuthForm onSubmit={handleSubmit}>
        <FormLabel>
          Enter your gender
          <Input
            type="text"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="gender"
            error={touched.gender && errors.gender}
          />
          {touched.gender && errors.gender && (
            <InputError>{errors.gender}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Enter your weight
          <Input
            type="number"
            name="weight"
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="weight"
            error={touched.weight && errors.weight}
          />
          {touched.weight && errors.weight && (
            <InputError>{errors.weight}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Enter your physical
          <Input
            type="number"
            name="physical"
            value={values.physical}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="physical"
            error={touched.physical && errors.physical}
          />
          {touched.physical && errors.physical && (
            <InputError>{errors.physical}</InputError>
          )}
        </FormLabel>
      </AuthForm>

      <h5>Your weight in kilograms:</h5>
      <p>
        The time of active participation in sports or other activities with a
        high physical. load:
      </p>
      <div>
        <h5>The required amount of water in liters per day:</h5>
        <p>1.8 L</p>
      </div>
      <h4>Write down how much water you will drink:</h4>

      <input type="integer"></input>
    </ReactModal>
  );
};

export default DailyNorma;
