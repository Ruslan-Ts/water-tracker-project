import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Button } from 'CommonStyle/Button/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { signUpSchema } from 'js/validation/schemas';
import { InputError } from 'components/forms/InputError.styled';
import { Title } from 'CommonStyle/Title/Title.styled';
import { AuthForm } from 'components/forms/AuthForm.styled';
import { useFormik } from 'formik';

const SignIn = () => {
  // const dispatch = useDispatch();

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
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <AuthForm onSubmit={onSubmit}>
      <Title>Sign in</Title>
      <FormLabel>
        Enter email
        <Input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <InputError>{errors.email}</InputError>
        )}
      </FormLabel>
      <FormLabel>
        Enter password
        <Input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <InputError>{errors.password}</InputError>
        )}
      </FormLabel>
      <Button type="submit">Sign up</Button>
      <RouterLink to="/signup">Sign up</RouterLink>
    </AuthForm>
  );
};

export default SignIn;
