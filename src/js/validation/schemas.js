import * as yup from 'yup';

const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must contain at least 1 number, 1 special symbol, 1 uppercase letter, and 1 lowercase letter'
    )
    .required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('You must to confirm your password!'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

export const rateSchema = yup.object().shape({
  weight: yup.number().min(0).max(300).required(),
  physical: yup.number().min(0).max(12),
});

export const recoverySchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
});

export const updateUserProfileSchema = yup.object().shape({
  gender: yup.string().required(),
  name: yup.string().min(3),
  email: yup.string().matches(emailPattern, 'Email is not valid'),

  oldPassword: yup
    .string()
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required() : field
    ),
  newPassword: yup
    .string()
    .nullable()
    .min(6)
    .test(
      'differentPassword',
      'The new password must differ from the old one.',
      function (value) {
        const oldPassword = this.resolve(yup.ref('oldPassword'));
        return !oldPassword || value !== oldPassword;
      }
    ),
  repeatPassword: yup
    .string()
    .test('commonPassword', 'Passwords do not match.', function (value) {
      const newPassword = this.resolve(yup.ref('newPassword'));
      return !newPassword || String(value) === String(newPassword);
    }),
});
