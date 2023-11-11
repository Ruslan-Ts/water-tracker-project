import { useFormik } from 'formik';

import { Button } from 'CommonStyle/Button/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Title } from 'CommonStyle/Title/Title.styled';

import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { InputError } from 'components/forms/InputError.styled';
import { AuthForm } from 'components/forms/AuthForm.styled';
import PasswordInput from 'components/forms/PasswordInput/PasswordInput';
import SignLayout from 'components/SignLayout/SighLayout';

import { signUpSchema } from 'js/validation/schemas';

const SignIn = () => {
  const onSubmit = e => {};
  const { values, touched, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <SignLayout>
      <AuthForm onSubmit={onSubmit}>
        <Title>Sign in</Title>
        <FormLabel>
          Enter email
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <InputError>{errors.email}</InputError>
          )}
        </FormLabel>
        <FormLabel>
          Enter password
          <PasswordInput
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            error={touched.password && errors.password}
          />
          {touched.password && errors.password && (
            <InputError>{errors.password}</InputError>
          )}
        </FormLabel>
        <Button type="submit">Sign up</Button>
        <RouterLink to="/forgot-password">Forgot password?</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default SignIn;
