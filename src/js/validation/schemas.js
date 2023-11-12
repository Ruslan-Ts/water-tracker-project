import * as yup from 'yup';

const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .matches()
    .required(),
});
