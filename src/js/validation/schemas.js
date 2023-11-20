import * as yup from 'yup';

const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
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
  rate: yup.number(),
});
export const rateOutSchema = yup.object().shape({
  rate: yup.number().min(0.01).max(15),
});

export const recoverySchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
});

export const updateUserProfileSchema = yup.object().shape({
  gender: yup.string().required(),
  name: yup
    .string()
    .max(32, 'Max length 32')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
      'Name should only contain letters (Latin, Ukrainian or Cyrillic)'
    ),
  email: yup.string().matches(emailPattern, 'Email is not valid'),
  oldPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //     'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required() : field
    ),
  newPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .nullable()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //   'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
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
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    //   .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //   'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
    .test('commonPassword', 'Passwords do not match.', function (value) {
      const newPassword = this.resolve(yup.ref('newPassword'));
      return !newPassword || String(value) === String(newPassword);
    }),
});
export const AddWaterSchema = yup.object({
  waterVolume: yup
    .number()
    .min(0, 'Water usage must be greater than or equal to 0')
    .max(5000, 'Max water usage 5000ml')
    .required('Water usage is required'),
  date: yup.date(),
});
