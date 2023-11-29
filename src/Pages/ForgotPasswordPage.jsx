import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { resetPasswordThunk } from 'redux/auth/thunk';
import { selectIsLoading } from 'redux/root/selectors';

import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Title } from 'CommonStyle/Title/Title.styled';

import { AuthForm } from 'components/forms/AuthForm.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { InputError } from 'components/forms/InputError.styled';
import { ButtonLoader } from 'components/forms/Loader.styled';

import SignLayout from 'layouts/SignLayout/SignLayout';

import { recoverySchema } from 'js/validation/schemas';
import Button from 'CommonStyle/Button';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [navigate, setNavigate] = useState(null);
  const navigateToSinIn = useNavigate();

  const onSubmit = e => {
    dispatch(resetPasswordThunk({ email: e, setNavigate: setNavigate }));
  };

  useEffect(() => {
    if (navigate) {
      navigateToSinIn('/singin');
    }
  }, [navigateToSinIn, navigate]);

  const { values, touched, errors, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: recoverySchema,
      onSubmit,
    });
  return (
    <SignLayout>
      <AuthForm onSubmit={handleSubmit}>
        <Title>Password recovery</Title>
        <FormLabel>
          Enter your email
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
        <Button type="submit" disabled={isLoading}>
          Send {isLoading && <ButtonLoader />}
        </Button>
        <RouterLink to="/signin">Sign in</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default ForgotPasswordPage;
