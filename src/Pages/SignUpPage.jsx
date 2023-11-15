// import { useDispatch } from 'react-redux';
// import { signUp } from 'redux/auth/operations';
import { useFormik } from 'formik';

import { Button } from 'CommonStyle/Button/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Title } from 'CommonStyle/Title/Title.styled';

import { AuthForm } from 'components/forms/AuthForm.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { InputError } from 'components/forms/InputError.styled';
import { PasswordMeter } from 'components/forms/PasswordMeter.styled';
import PasswordInput from 'components/forms/PasswordInput/PasswordInput';
import PasswordToolTip from 'components/forms/PasswordToolTip/PasswordToolTip';
import SignLayout from 'components/SignLayout/SighLayout';

import { signUpSchema } from 'js/validation/schemas';
import { calculateStrength } from 'js/validation/passwordStrength';
import { PasswordInputWrapper } from 'components/forms/PasswordInput/PasswordInput.styled';

const SignUp = () => {
  // const dispatch = useDispatch();
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
    console.log(e);
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      strengthScore: 0,
    },
    validationSchema: signUpSchema,
    onSubmit,
  });
  // console.log(values);
  const handlePasswordChange = e => {
    const password = e.target.value;
    const score = calculateStrength(password);

    setFieldValue('password', password);
    setFieldValue('strengthScore', score);
  };

  return (
    <SignLayout>
      <AuthForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
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
        <FormLabel>
          Enter your password
          <PasswordInputWrapper>
            <PasswordInput
              name="password"
              value={values.password}
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              placeholder="Password"
              $error={touched.password && errors.password}
            />
            {values.password && (
              <PasswordToolTip
                score={values.strengthScore}
                password={values.password}
              />
            )}
          </PasswordInputWrapper>
          {values.password && <PasswordMeter $score={values.strengthScore} />}
          {touched.password && errors.password && (
            <InputError>{errors.password}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Repeat password
          <PasswordInput
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Repeat password"
          />
          {touched.repeatPassword && errors.repeatPassword && (
            <InputError>{errors.repeatPassword}</InputError>
          )}
        </FormLabel>
        <Button type="submit">Sign up</Button>
        <RouterLink to="/signin">Sign in</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default SignUp;