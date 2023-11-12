// import { useDispatch } from 'react-redux';
// import { signUp } from 'redux/auth/operations';
import { Button } from 'CommonStyle/Button/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Title } from 'CommonStyle/Title/Title.styled';
import { AuthForm } from 'components/forms/AuthForm.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { InputError } from 'components/forms/InputError.styled';
import PasswordInput from 'components/forms/PasswordInput/PasswordInput';
import { useFormik } from 'formik';
import { signUpSchema } from 'js/validation/schemas';

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
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      <FormLabel>
        Enter your email
        <Input
          type="text"
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
        Enter your password
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
  );
};

export default SignUp;
