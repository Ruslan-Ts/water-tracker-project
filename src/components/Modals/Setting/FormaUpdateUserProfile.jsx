import React from 'react';
import {
  Button,
  FormLabel,
  FormLabelRadio,
  WrapperRadio,
} from '../DailyNorma/DailyNorma.styled';
import {
  WrapperForma,
  WrapperFormaLeft,
  WrapperFormaMain,
  WrapperFormaRight,
} from './Setting.styled';
import { useFormik } from 'formik';
import { updateUserProfileSchema } from 'js/validation/schemas';
import { Input } from 'components/forms/Input.styled';
import { InputError } from 'components/forms/InputError.styled';
import PasswordInput from 'components/forms/PasswordInput/PasswordInput';
import { PasswordInputWrapper } from 'components/forms/PasswordInput/PasswordInput.styled';
import PasswordToolTip from 'components/forms/PasswordToolTip/PasswordToolTip';
import { PasswordMeter } from 'components/forms/PasswordMeter.styled';
import { calculateStrength } from 'js/validation/passwordStrength';

const FormaUpdateUserProfile = () => {
  const onSubmit = e => {
    //   e.preventDefault();
    //   dispatch(
    //     signUp({
    //       name: e.target.elements.name.value,
    //       email: e.target.elements.email.value,
    //       password: e.target.elements.password.value,
    //     })
    //   );
    //   e.target.reset();
    console.log(values.name);
  };

  const {
    values,
    touched,
    errors,
    setFieldValue,

    handleSubmit,
    handleChange,
    handleBlur,
    // resetForm,
  } = useFormik({
    initialValues: {
      gender: '',
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    validationSchema: updateUserProfileSchema,
    onSubmit,
  });

  const handlePasswordChange = e => {
    const password = e.target.value;
    const score = calculateStrength(password);

    setFieldValue('password', password);
    setFieldValue('strengthScore', score);
    handleChange(e);
  };

  return (
    <WrapperForma>
      <WrapperFormaMain>
        <WrapperFormaLeft>
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
            Your name
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
              $error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <InputError>{errors.name}</InputError>
            )}
          </FormLabel>

          <FormLabel>
            E-mail
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              $error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <InputError>{errors.email}</InputError>
            )}
          </FormLabel>
        </WrapperFormaLeft>
        <WrapperFormaRight>
          <FormLabel>
            Outdated password:
            <PasswordInput
              name="oldPassword"
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Old password"
            />
            {touched.oldPassword && errors.oldPassword && (
              <InputError>{errors.oldPassword}</InputError>
            )}
          </FormLabel>
          <FormLabel>
            New Password:
            <PasswordInputWrapper>
              <PasswordInput
                name="newPassword"
                value={values.newPassword}
                onChange={handlePasswordChange}
                onBlur={handleBlur}
                placeholder="New password"
                // $error={touched.newPassword && errors.newPassword}
              />
              {values.newPassword && (
                <PasswordToolTip
                  score={values.strengthScore}
                  password={values.newPassword}
                />
              )}
            </PasswordInputWrapper>
            {values.newPassword && (
              <PasswordMeter $score={values.strengthScore} />
            )}
            {errors.newPassword && (
              <InputError>{errors.newPassword}</InputError>
            )}
          </FormLabel>
          <FormLabel>
            Repeat new password:
            <PasswordInput
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Repeat password"
              $error={touched.repeatPassword && errors.repeatPassword}
            />
            {touched.repeatPassword && errors.repeatPassword && (
              <InputError>{errors.repeatPassword}</InputError>
            )}
          </FormLabel>
        </WrapperFormaRight>
      </WrapperFormaMain>
      <Button type="submit" onClick={handleSubmit}>
        Save
      </Button>
    </WrapperForma>
  );
};

export default FormaUpdateUserProfile;
